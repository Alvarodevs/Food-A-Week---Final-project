from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=False, nullable=False)
    lastName = db.Column(db.String(30), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    postalCode = db.Column(db.String(20), unique=False, nullable=False)
    phone = db.Column(db.Integer(30), unique=False, nullable=True)
    #avatar = db.Column(db.String(20), unique=True, nullable=False)
    menu = db.relationship('Menu', backref='user', lazy=True)
    restrictions = db.relationship('Restriction', backref='user', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "userName": self.userName,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName,
            "address": self.address,
            "postalCode": self.postalCode,
            "phone": self.phone,
        }
            # do not serialize the password, its a security breach

#########################################

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True, nullable=False)
    #image = db.Column(db.String(30), unique=True, nullable=False)
    recipeDetail_id = db.Column(db.Integer, db.ForeignKey('recipeDetail.id'))
    recipeDetail = db.relationship('RecipeDetail', backref='recipe', lazy=True) 
    is_active = db.Column(db.Boolean(), unique=False, nullable=False) 

    def __repr__(self):
        return '<Recipe %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "recipeDetail_id": self.recipeDetail_id,
        }

##########################################

class RecipeDetail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
    quantity = db.Column(db.Integer(20), unique=True, nullable=False)
    unit = db.Column(db.String(50), unique=True, nullable=False)
    servings = db.Column(db.Integer(30), unique=True, nullable=False)
    ingredient = db.relationship('Ingredient', backref='recipeDetail', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<RecipeDetail %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "recipe_id": self.recipe.name,
            "ingredient_id": self.image,
            "quantity": self.recipeDetail_id,
            "unit": self.unit,
            "servings": self.servings,
        }

##########################################

class SelectedRecipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    recipe_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<SelectedRecipe %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "day_id": self.day_id,
            "recipe_id": self.recipe_id,
        }

#############################################

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Column(db.String(50), unique=False, nullable=False))
    restriction_id = db.Column(db.Integer, db.ForeignKey('restriction.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    recipeDetail = db.Column(db.Integer, db.ForeignKey('recipeDetail.id'))
    restriction = db.relationship('Restriction', backref='ingredient', lazy=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<Ingredient %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.day_id,
            "restriction_id": self.recipe_id, #¿NECESARIO?
            "user_id": self.user_id, #¿NECESARIO?
        }

##########################################

class Restriction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    ingredient_id = db.Column(db.Integer, db.ForeignKey('ingredient.id'))
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
    name = db.Column(db.String(100), unique=False, nullable=False))
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
    name = db.Column(db.String(50), unique=False, nullable=False))
    menu_id = db.Column(db.Integer, db.ForeignKey('menu.id'), nullable=False)

    def __repr__(self):
        return '<Day %r>' % self.id
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
        }

############################################
