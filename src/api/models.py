from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    lastname = db.Column(db.String(30), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    postalcode = db.Column(db.String(20), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=False, nullable=True)
    #avatar = db.Column(db.String(20), unique=True, nullable=False)
    menu = db.relationship('Menu', backref='user', lazy=True)
    restrictions = db.relationship('Restriction', backref='user', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "address": self.address,
            "postalcode": self.postalcode,
            "phone": self.phone,
        }
            # do not serialize the password, its a security breach

#########################################

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True, nullable=False)
    #image = db.Column(db.String(30), unique=True, nullable=False)
    recipedetail_id = db.Column(db.Integer, db.ForeignKey('recipedetail.id'))
    recipedetail = db.relationship('Recipedetail', backref='recipe', lazy=True) 
    is_active = db.Column(db.Boolean(), unique=False, nullable=False) 

    def __repr__(self):
        return '<Recipe %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "recipedetail_id": self.recipedetail_id,
        }

##########################################

class Recipedetail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
    quantity = db.Column(db.Integer, unique=True, nullable=False)
    unit = db.Column(db.String(50), unique=True, nullable=False)
    servings = db.Column(db.Integer, unique=True, nullable=False)
    ingredient = db.relationship('Ingredient', backref='recipedetail', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<RecipeDetail %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "recipe_id": self.recipe_id,
            "ingredient_id": self.ingredient_id,
            "quantity": self.quantity,
            "unit": self.unit,
            "servings": self.servings,
        }

##########################################

class Selectedrecipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day_id = db.Column(db.Integer, db.ForeignKey('day.id'))
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Selectedrecipe %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "day_id": self.day_id,
            "recipe_id": self.recipe_id,
        }

#############################################

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    restriction_id = db.Column(db.Integer, db.ForeignKey('restriction.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    recipedetail_id = db.Column(db.Integer, db.ForeignKey('recipedetail.id'))
    restriction = db.relationship('Restriction', backref='ingredient', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Ingredient %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "restriction_id": self.restriction_id, #¿NECESARIO?
            "user_id": self.user_id, #¿NECESARIO?
        }

##########################################

class Restriction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'), nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Restriction %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "ingredient_id": self.ingredient_id, #¿NECESARIO?           
        }

##############################################

class Menu(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    day = db.relationship('Day', backref='menu', lazy=True)

    def __repr__(self):
        return '<Menu %r>' % self.id
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
        }

#############################################

class Day(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)

    def __repr__(self):
        return '<Day %r>' % self.id
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
        }

############################################
