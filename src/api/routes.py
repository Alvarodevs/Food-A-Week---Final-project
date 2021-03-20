"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Ingredient, User, Menu, Day, Recipe, RecipeDetail, SelectedRecipe, Restriction, DataManager, MenuDataManager 
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask.globals import request
import json
import os

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

# @api.route('/sign_in', methods=['POST'])
# def sign_in():
#   json_data = request.get_json()
#   user1 = User.query.filter_by(email=json_data['email']).one_or_none()
#   password = json_data['password']
#   if not user1 or not user1.check_password(password):
#     return jsonify("Wrong email or password"), 401

#   # Notice that we are passing in the actual sqlalchemy user object here
#   access_token = create_access_token(identity=user1.sign_in_serialize())
#   return jsonify(access_token=access_token)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/sign_up", methods=["POST"])
def sign_up():
  print("HELLO")
  body = request.get_json(force=True)
  user_name = body.get("user_name", None)
  name = body.get("name", None)
  last_name = body.get("lastName", None)
  email = body.get("email", None)
  password = body.get("password", None)


  user1 = User(user_name=user_name, name=name, last_name=last_name, email=email, password=password)
  db.session.add(user1)
  db.session.commit()

  return jsonify(user1.serialize())

  #devuelve 404 >>

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/sign_in", methods=["POST"])
def sign_in():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).one_or_none()
    if not user or not user.check_password(password):
        return jsonify("Wrong email or password"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user.serialize())
    return jsonify(access_token=access_token)

@api.route("/me", methods=["GET"])
@jwt_required()
def protected():
    # We can now access our sqlalchemy User object via `current_user`.
    serialized_data = get_jwt_identity()
    return jsonify(serialized_data)



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

@api.route('/recipe_detail', methods=['GET'])
def handle_recipedetail():

    # get all the recipes
    recipe_detail_query = RecipeDetail.query.all()

    # get only the ones named "Joe"
    #recipe_query = Recipe.query.filter_by(name='Joe')

    # map the results and your list of recipes  inside of the recipes variable
    recipe_details = list(map(lambda x: x.serialize(), recipe_detail_query))

    return jsonify(recipe_details), 200

####################################    

@api.route('/selected_recipe', methods=['GET'])
def handle_selected_recipe():

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

# AVATAR (FOTO DE PERFIL)
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


###### API post 

@api.route('/seed_data_user', methods=['GET'])
def handle_seed_data_user():
    DataManager().seed_data()
    return jsonify("El seed data fue cargado con éxito!"), 200

@api.route('/selected_recipe', methods=['POST'])
def send_selected_recipe():
    payload = request.get_json() #traeme el json del request a python
    new_selected_recipe = SelectedRecipe(day_id=payload["day_id"], recipe_id=payload["recipe_id"], menu_id=payload["menu_id"], position=payload["position"], user_id=payload["user_id"])

    db.session.add(new_selected_recipe) #añadir una receta o tipo datos
    db.session.commit() #guardar cambios
    print(new_selected_recipe)

    return jsonify(new_selected_recipe.serialize()), 200

@api.route('/selected_recipe', methods=['PUT'])
def update_selected_recipe():
    payload = request.get_json() #traeme el json del request a python
    updated_selected_recipe = SelectedRecipe(day_id=payload["day_id"], recipe_id=payload["recipe_id"], menu_id=payload["menu_id"], position=payload["position"], user_id=payload["user_id"])

    db.session.add(updated_selected_recipe) #añadir una receta o tipo datos
    db.session.commit() #guardar cambios
    print(updated_selected_recipe)

    return jsonify(updated_selected_recipe.serialize()), 200

@api.route('/selected_recipe', methods=['DELETE'])
def remove_selected_recipe():
    payload = request.get_json() #traeme el json del request a python
    remove_selected_recipe = SelectedRecipe(day_id=payload["day_id"], recipe_id=payload["recipe_id"], menu_id=payload["menu_id"], position=payload["position"], user_id=payload["user_id"])

    db.session.add(remove_selected_recipe) #añadir una receta o tipo datos
    db.session.commit() #guardar cambios
    print(remove_selected_recipe)

    return jsonify(remove_selected_recipe.serialize()), 200


@api.route('/new_weekly_menu', methods=['POST'])
@jwt_required()
def create_new_weekly_menu():
    user = current_user(get_jwt_identity())
    # script_dir = os.path.dirname(__file__)
    # file_path = os.path.join(script_dir, 'data/new_weekly_menu.json')
    # #complete_week = request.get_json() #traeme el json del request a python
    # with open(file_path) as f:
    #   data = json.load(f)
    data = request.get_json() # {'title': "erwerw", 'days': {....} }
    MenuDataManager().create_weekly_recipe(data, user)

    return jsonify("El menú fue creado con éxito!"), 200


@api.route('/get_user_by_email')
def get_user_by_email():
    body = request.get_json(force=True)
    email = body.get('email', None)
    user = User.get_user_by_email(email)
    menu = Menu.get_menu_by_user_id(user.id)

    return jsonify(menu.serialize()), 200

def current_user(identity):
  return User.query.filter_by(email=identity['email']).one_or_none()