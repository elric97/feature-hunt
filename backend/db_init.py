import pymongo

client = pymongo.MongoClient("mongodb+srv://bot:bot123@cluster0.xph5e.mongodb.net/feature-hunt?retryWrites=true&w=majority")
db = client.get_database('feature-hunt')
records = db.users
numCollections = db.getCollectionNames().length

feature_dict = [{'id': 2, 'text': 'feature-1', 'votes': 1, 'timestamp': '1234567', 'tags': ['tag1']}]
product_input = {'name': 'name', 'description': 'description',
                             'image_url': 'https://somrthing.gif/', 'users': ['user@email'], 'tags': ['tag1','tag2'], 'features': feature_dict}
if numCollections<2 :
    db.products.insert(product_input)
product_records = db.products