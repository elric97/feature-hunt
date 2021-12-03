# pylint: disable=wrong-import-position,pointless-string-statement,undefined-variable,line-too-long

import datetime
from flask import jsonify
from flask import request
from app import app
from db_init import product_records
import time


@app.route("/addProduct", methods=['Post'])
#################################################################################
##       Function: add_product
##       Description: This post request is used to gather all the information from
##                    the project form and send it to the database to be stored
##       Inputs:
##           - NA
##       Outputs:
##           - Returns true or false if new project is able to be added
#################################################################################
def add_product():
    """To add new product in product_records."""
    try:
        product_name = request.form.get("productName")
        product_description = request.form.get("productDescription")
        image_url = request.form.get("imageUrl")
        email = request.form.get("email")
        tags = request.form.get("tags").split(' ')

        feature_dict = []

        product_input = {'uid': str(int(time.time())), 'name': product_name, 'description': product_description,
                            'image_url': image_url, 'users': [email], 'tags': tags, 'features': feature_dict, 'votes': 0}

        product_records.insert_one(product_input)

        return jsonify(success=True)
    except:
        return jsonify(success=False)

# @app.route("/<productName>/addFeature", method=['Post'])
# def addFeature(productName):
#     if request.method == 'POST':
#         data = request.json
#         data['_id'] = ObjectId()
#         print(data)
#         if data is None or data == {}:
#             return Response(response=json.dumps({"Error":
#                             "Please provide connection information"}),
#                             status=400,
#                             mimetype='application/json')
#         result = product_records.find_one_and_update(
#             {"project_name": productName}, {"$push": {"features": data}}
#         )
#
#         return jsonify(success=True)
#
#     elif request.method == 'GET':
#         result = mongo.db.products.find({"name": productname}, {"features": 1})
#     return dumps(result)
