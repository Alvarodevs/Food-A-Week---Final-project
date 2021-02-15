from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(30), unique=True, nullable=False)
    lastName = db.Column(db.String(30), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=True, nullable=False)
    postalCode = db.Column(db.String(20), unique=True, nullable=False)
    phone = db.Column(db.Integer(30), unique=True, nullable=True)
    # avatar = db.Column(db.String(20), unique=True, nullable=False)
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
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<RecipeDetail %r>' % self.recipe.name #¿¿¿COMO PASAR EL NOMBRE DE LA RECETA EN EL MODEL RECIPE???

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