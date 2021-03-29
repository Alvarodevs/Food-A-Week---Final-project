from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp
import os
import json

db = SQLAlchemy()

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # recipes = db.relationship("Recipe", secondary="recipe_detail")

    def __repr__(self):
      return '<Ingredient %r>' % self.id

    def serialize(self):
      return {
          "id": self.id,
          "name": self.name,
          "restriction_id": self.restriction_id, #¿NECESARIO?
          "user_id": self.user_id, #¿NECESARIO?
        }

# class Role(db.Model):
#   id = db.Column(db.Integer, primary_key=True)
#   name = db.Column(db.String(120), unique=True, nullable=False)
#   users = db.relationship('User', backref='role', lazy=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(30), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=True)
    postal_code = db.Column(db.String(20), unique=False, nullable=True)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    # role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=True)
    menus = db.relationship('Menu', backref='user', lazy=True)
    restricted_ingredients = db.relationship("Ingredient", secondary="restriction")

    def __repr__(self):
        return '<User %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "address": self.address,
            "postal_code": self.postal_code,
            "phone": self.phone,
          }

    def check_password(self, password_param):
      return safe_str_cmp(self.password.encode('utf-8'), password_param.encode('utf-8'))

    def sign_in_serialize(self):
      return {
        "id": self.id,
        "email": self.email
      }

    def get_user_by_email(email):
      return User.query.filter_by(email=email).first_or_404()

    def get_user_serialize(self):
      return {
         "id": self.id,
        "user_name": self.user_name
      }
    

    

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    days = db.relationship('Day', backref='menu', lazy=True)

    def __repr__(self):
        return '<Menu %r>' % self.id

    def serialize(self):
        return{
            "id": self.id,
            "title": self.title
        }

    def get_menu_by_user_id(user_id):
        return Menu.query.filter_by(user_id=user_id).first_or_404()


class Day(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    position = db.Column(db.Integer, unique=False, nullable=True)
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)
    recipes = db.relationship("Recipe", secondary="selected_recipe")

    def __repr__(self):
      return '<Day %r>' % self.id

    def serialize(self):
      return{
          "id": self.id,
          "name": self.name,
          "position": self.position,
          "menu_id": self.menu_id
      }

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True, nullable=False)
    uri = db.Column(db.String(300), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # ingredients = db.relationship("Ingredient", secondary="recipe_detail")
    days = db.relationship("Day", secondary="selected_recipe")

    def __repr__(self):
      return '<Recipe %r>' % self.name

    def serialize(self):
      return {
          "id": self.id,
          "name": self.name,
          "image": self.image,
          "recipeDetail_id": self.recipeDetail_id,
      }

class RecipeDetail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
    quantity = db.Column(db.Integer, unique=True, nullable=False)
    unit = db.Column(db.String(50), unique=True, nullable=False)
    servings = db.Column(db.Integer, unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    recipe = db.relationship('Recipe', backref=db.backref("recipe_detail", cascade="all, delete-orphan"))
    ingredient = db.relationship('Ingredient', backref=db.backref("recipe_detail", cascade="all, delete-orphan"))

    def __repr__(self):
      return '<RecipeDetail %r>' % self.id

    def serialize(self):
      return {
          "id": self.id,
          "recipe_id": self.recipe_id,
          "ingredient_id": self.ingredient_id,
          "quantity": self.quantity,
          "unit": self.unit,
          "servings": self.servings
        }

class SelectedRecipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day_id = db.Column(db.Integer, db.ForeignKey('day.id'))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'), nullable=True)
    day = db.relationship('Day', backref=db.backref("selected_recipe", cascade="all, delete-orphan"))
    recipe_code = db.Column(db.String(250), unique=False, nullable=True)
    recipe = db.relationship('Recipe', backref=db.backref("selected_recipe", cascade="all, delete-orphan"))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False, default=True)

    def __repr__(self):
      return '<SelectedRecipe %r>' % self.recipe.name

    def serialize(self):
      return {
          "id": self.id,
          "day_id": self.day_id,
          "recipe_id": self.recipe_id,
      }

class Restriction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
    user = db.relationship('User', backref=db.backref("restriction", cascade="all, delete-orphan"))
    ingredient = db.relationship('Ingredient', backref=db.backref("restriction", cascade="all, delete-orphan"))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
      return '<Restriction %r>' % self.id

    def serialize(self):
      return {
          "id": self.id,
          "user_id": self.user_id,
          "ingredient_id": self.ingredient_id, #¿NECESARIO?
      }

class DataManager:

    def __init__(self):
        self.menu_manager = MenuDataManager()

    def seed_data(self):
        script_dir = os.path.dirname(__file__)
        file_path = os.path.join(script_dir, 'data/new_user_and_menu.json')
        with open(file_path) as f:
            data = json.load(f)

        users_data = data #el archivo con data new user and menu ya es un arreglo por lo que podríamos traer información de varios usuarios. así que los corchetes de arreglo de este data se eliminan.

        for user_datum in users_data:
          self.create_user(user_datum) #Este loop es el que esta dando error en el route: handle_seed_data_user().

    def create_user(self,data_user):
        user = User(user_name=data_user['user_name'],
                   email=data_user['email'],
                   password=data_user['password'],
                   name=data_user['name'],
                   last_name=data_user['last_name'],
                   address=data_user['address'],
                   postal_code=data_user['postal_code'],
                   phone=data_user['phone'],
                   is_active=True)
        db.session.add(user)
        db.session.commit()
        db.session.flush()

        menu_params = {'title': data_user["title"], 'days': data_user['days'] }
        self.menu_manager.create_weekly_recipe(menu_params, user)

        return user

class MenuDataManager:

  def __init__(self):
    pass

  def create_weekly_recipe(self, menu_params, current_user):
    menu = self.create_menu(menu_params, current_user)
    days = self.create_days(menu_params, menu) #llamar metodo

  def create_menu(self, menu_params, current_user):
    menu = Menu(title=menu_params['title'], user_id=current_user.id)
    db.session.add(menu)
    db.session.commit()
    db.session.flush()

    return menu

  def create_days(self, menu_params, menu):
    days_json = menu_params['days']
    print(menu_params)
    for i, day in enumerate(days_json):
      self.create_day(day,i,days_json[day], menu)

  def create_day(self,name,day_position, meals, menu):
    day = Day(name=name, position=day_position, menu_id=menu.id) #hay que crear days, he replicado parte de lo que sería el menú l248
    db.session.add(day)
    db.session.commit()
    db.session.flush()
    for i, food in enumerate(meals):
      print(food)
      self.create_selected_recipe(food,day)

  def create_selected_recipe(self, selected_recipe_params, day):
    selected_recipe = SelectedRecipe(day_id=day.id, recipe_code=selected_recipe_params["url"])
    db.session.add(selected_recipe)
    db.session.commit()
    db.session.flush()