# pylint: skip-file
# pylint: disable=pointless-string-statement,undefined-variable,line-too-long

from flask import Flask
from os import environ
from flask_cors import CORS

app = Flask(__name__)
from auth_controller import *
from products import *
from product_controller import *
from user_projects_controller import *
from db_init import db
from ping import *

app.secret_key = "testing"
CORS(app)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
    # app.debug = True
    # waitress.serve(app, port=environ.get("PORT", 5000))
