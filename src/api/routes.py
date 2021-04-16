"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Ingredient, User, Menu, Day, Recipe, RecipeDetail, SelectedRecipe, Restriction, DataManager, MenuDataManager 
from api.utils import generate_sitemap, APIException, transform_to_day_dict
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask.globals import request
import json
import os

api = Blueprint('api', __name__)

@api.route('/users', methods=['GET'])
def handle_users():
    user = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200

#necessary for sign_up 
@api.route("/sign_up", methods=["POST"])
def sign_up():
  body = request.get_json(force=True)
  user_name = body.get("user_name", None)
  name = body.get("name", None)
  email = body.get("email", None)
  password = body.get("password", None)
  address = body.get("address", None)
  postal_code = body.get("postal_code", None)

  user1 = User(user_name=user_name, name=name,  email=email, password=password, address=address, postal_code = postal_code)
  db.session.add(user1)
  db.session.commit()
  access_token = create_access_token(identity=user1.serialize())

  return jsonify(user=user1.serialize(), accessToken=access_token)

#necessary for sign_in
@api.route("/sign_in", methods=["POST"])
def sign_in():
    status = "KO"
    body = request.get_json(force=True)
    email = body.get("email", None)
    password = body.get("password", None)

    user = User.query.filter_by(email=email).one_or_none()
    if not user or not user.check_password(password):
      #return jsonify("Your credentials are wrong, please try again"), 401
      return jsonify({"status": status, "msg": "Bad username or password"}), 401
    # Notice that we are passing in the actual sqlalchemy user object here
    status = "OK"
    access_token = create_access_token(identity=user.serialize())
    return jsonify(status=status, user=user.serialize(), accessToken=access_token)

@api.route("/sign_up_put", methods=["PUT"])
@jwt_required()
def sign_up_post():
  user = current_user(get_jwt_identity())
  body = request.get_json(force=False)
  user_name = body.get("user_name", None)
  name = body.get("name", None)
  address = body.get("address", None)
  postal_code = body.get("postal_code", None)

  print("My name is ........")
  print(user.name)
  user.user_name = user_name
  user.name = name
  user.address = address
  user.postal_code = postal_code

  db.session.commit()


  return jsonify(user.serialize())

#################################### ME SECTION - STARTS #############################
@api.route("/me", methods=["GET", "PUT"])
@jwt_required()
def protected():
  user = current_user(get_jwt_identity())
  if request.method == 'PUT' and 'avatar' in request.files:
    result = cloudinary.uploader.upload(request.files['avatar']) # Response metadata : https://cloudinary.com/documentation/django_image_and_video_upload#upload_response
    
    if user.avatar_url is not None: #Destroy the previous image only after the new one is uploaded
      cloudinary.uploader.destroy(user.avatar_public_id())
    
    user.avatar_url = result['secure_url']
    db.session.commit()
  print(user.serialize())
  return jsonify(user.serialize())

## Menus - START ##
@api.route("/me/menus", methods=["GET"])
@jwt_required()
def handle_me_menus():
  user = current_user(get_jwt_identity())
  all_menus = list(map(lambda menu: menu.serialize(), user.menus))
  return jsonify(all_menus), 200

@api.route("/me/menus/<int:id>", methods=["GET"])
@jwt_required()
def handle_me_one_menu(id):
  user = current_user(get_jwt_identity())
  menu = Menu.query.get(id)
  return jsonify(menu.serialize()), 200

@api.route("/me/menus/<int:id>/days", methods=["GET"])
@jwt_required()
def handle_menu_with_days(id):
  user = current_user(get_jwt_identity())
  menu = Menu.query.get(id)
  return jsonify(menu.serialize_with_days()), 200

@api.route("/me/days/<int:id>/selected_recipes", methods=["GET"])
@jwt_required()
def handle_me_selected_recipes(id):
  user = current_user(get_jwt_identity())
  day = Day.query.get(id)
  return jsonify(day.serialize_with_recipes()), 200

## Menus - ENDS ##
#################################### ME SECTION - ENDS #############################
#eliminar menú desde el weeks (ANNA DOING)
@api.route("/me/menus/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_one_menu(id):
  user = current_user(get_jwt_identity())
  menu = Menu.query.get(id)

  print(menu)
  db.session.delete(menu)
  db.session.commit()
  
  return jsonify(menu.serialize()), 200
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
    user = current_user(get_jwt_identity()) #TODO: Replace with the current_user method
    data = request.get_json() # {'title': "erwerw", 'days': {....} }
    data_days = transform_to_day_dict(data['days'])
    params = {'title': data["title"], 'days': data_days }
    print(params)
    MenuDataManager().create_weekly_recipe(params, user)

    return jsonify("El menú fue creado con éxito!"), 200
    
@api.route('/get_user_by_email')
def get_user_by_email():
    body = request.get_json(force=True)
    email = body.get('email', None)
    user = User.get_user_by_email(email)
    menu = Menu.get_menu_by_user_id(user.id)

    return jsonify(menu.serialize()), 200

def current_user(identity):
  return User.query.get(identity["id"])