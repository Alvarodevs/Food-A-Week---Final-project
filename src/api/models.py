from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    recipes = db.relationship("Recipe", secondary="recipe_detail")

    def __repr__(self):
      return '<Ingredient %r>' % self.id

    def serialize(self):
      return {
        "id": self.id,
        "name": self.name,
        "restriction_id": self.restriction_id, #¿NECESARIO?
        "user_id": self.user_id, #¿NECESARIO?
      }

class Role(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(120), unique=True, nullable=False)
  users = db.relationship('User', backref='role', lazy=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    last_name = db.Column(db.String(30), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    postal_code = db.Column(db.String(20), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    #avatar = db.Column(db.String(20), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)
    menus = db.relationship('Menu', backref='user', lazy=True)
    restricted_ingredients = db.relationship("Ingredient", secondary="restriction")
    
    def __repr__(self):
        return '<User %r>' % self.userName

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
            # do not serialize the password, its a security breach

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    days = db.relationship('Day', backref='menu', lazy=True)

    def __repr__(self):
      return '<Menu %r>' % self.id
    
    def serialize(self):
      return{
          "id": self.id,
          "name": self.name,
      }


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
    is_active = db.Column(db.Boolean(), unique=False, nullable=False) 
    ingredients = db.relationship("Ingredient", secondary="recipe_detail")
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
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    day = db.relationship('Day', backref=db.backref("selected_recipe", cascade="all, delete-orphan"))
    recipe = db.relationship('Recipe', backref=db.backref("selected_recipe", cascade="all, delete-orphan"))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
      return '<SelectedRecipe %r>' % self.id

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
