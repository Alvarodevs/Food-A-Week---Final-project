"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Ingredient,Role, User, Menu, Day, Recipe, RecipeDetail, SelectedRecipe, Restriction, DataManager
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#ENDPOINTS ORDER ¡1 ENDP/METHOD! (from models.py): Ingredient,Role, User, Menu, Day, Recipe, RecipeDetail, SelectedRecipe

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

####################################

@api.route('/ingredient', methods=['GET'])
def handle_ingredient():

    # get all the recipes
    ingredient_query = Ingredient.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    ingredients = list(map(lambda x: x.serialize(), ingredient_query))

####################################

@api.route('/role', methods=['GET'])
def handle_role():

    # get all the recipes
    role_query = Role.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    roles = list(map(lambda x: x.serialize(), role_query))

    return jsonify(roles), 200

####################################

@api.route('/users', methods=['GET'])
def handle_users():

    # get all the recipes
    user_query = User.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    users = list(map(lambda x: x.serialize(), user_query))

    return jsonify(users), 200

@api.route('/sign_in', methods=['POST'])
def sign_in():
  json_data = request.get_json()
  user1 = DataManager().create_user(json_data)
  return jsonify(user1.serialize()), 200

####################################

@api.route('/menu', methods=['GET'])
def handle_menu():

    # get all the recipes
    menu_query = Menu.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    menus = list(map(lambda x: x.serialize(), menu_query))

    return jsonify(menus), 200

####################################

@api.route('/day', methods=['GET'])
def handle_day():

    # get all the recipes
    day_query = Day.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    days = list(map(lambda x: x.serialize(), day_query))

    return jsonify(days), 200

####################################

@api.route('/recipe', methods=['GET'])
def handle_recipe():

    # get all the recipes
    recipe_query = Recipe.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    recipes = list(map(lambda x: x.serialize(), recipe_query))

    return jsonify(recipes), 200

####################################

@api.route('/recipedetail', methods=['GET'])
def handle_recipedetail():

    # get all the recipes
    recipe_detail_query = RecipeDetail.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    recipe_details = list(map(lambda x: x.serialize(), recipe_detail_query))

    return jsonify(recipe_details), 200

####################################    

@api.route('/selectedrecipe', methods=['GET'])
def handle_selectedrecipe():

    # get all the recipes
    selected_recipe_query = SelectedRecipe.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    selected_recipes = list(map(lambda x: x.serialize(), selected_recipe_query))

    return jsonify(selected_recipes), 200

####################################    

@api.route('/restriction', methods=['GET'])
def handle_restriction():

    # get all the recipes
    restriction_query = Restriction.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    restrictions = list(map(lambda x: x.serialize(), restriction_query))

    return jsonify(restrictions), 200

#############################

# @api.route('/seed_data', methods=['GET'])
# def handle_users():
#     seed_data()

#     return jsonify(response_body), 200









# @api.route('/profile/image/<int:user_id>', methods=['PUT'])
# def handle_upload(user_id):

#     # validate that the front-end request was built correctly
#     if 'avatar_image' in request.files:
#         # upload file to uploadcare
#         result = cloudinary.uploader.upload(request.files['avatar_image'])

#         # fetch for the user
#         user1 = User.query.get(user_id)
#         # update the user with the given cloudinary image URL
#         user1.profile_image_url = result['secure_url']

#         db.session.add(user1)
#         db.session.commit()

#         return jsonify(user1.serialize()), 200
#     else:
#         raise APIException('Missing profile_image on the FormData')