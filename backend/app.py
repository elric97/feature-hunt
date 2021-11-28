# pylint: skip-file
# pylint: disable=pointless-string-statement,undefined-variable,line-too-long
import os

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
from controller.auth_controller import *
from controller.products import *
from controller.product_controller import *
from database.db_init import db
from controller.ping_controller import *

app.secret_key = "testing"
CORS(app)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
    # app.debug = True
    # waitress.serve(app, port=environ.get("PORT", 5000))
