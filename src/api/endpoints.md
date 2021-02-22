# API & ENDPOINTS
## Data
Class User

            "id"
            "userName"
            "email"
            "name"
            "lastName"
            "address"
            "postalCode"
            "phone"
   


Class Ingredient

            "id"
            "name"
            "restriction_id"
            "user_id"
    

Class Restriction

            "id"
            "user_id"
            "ingredient_id"         

Class Recipe

            "id": self.id,
            "name": self.name,
            "image": self.image,
            "recipeDetail_id": self.recipeDetail_id,


Class RecipeDetail

            "id": self.id,
            "recipe_id": self.recipe_id,
            "ingredient_id": self.ingredient_id,
            "quantity": self.quantity,
            "unit": self.unit,
            "servings": self.servings,


Class SelectedRecipe

            "id": self.id,
            "day_id": self.day_id,
            "recipe_id": self.recipe_id,

Class Menu


            "id": self.id,
            "name": self.name,
            #order

Class Day

            "id": self.id,
            "name": self.name,



## SECTION NEW WEEK
api/v1/
### External API
GET from API EDAMAME

### Endpoints

- User stores recipes in a specific day
- User store a day with recipes inside
- User store a WEEK

1. User stores recipes in a specific day

api/v1/

api/v1/recipes/:day_order

BODY REQUEST: --> Header: 'Content-Type': 'application/json'
 

{ user_id, # from Class User </br>
recipe_id:"546", # from Class SelectedRecipe</br>
day_id:"", # from Class SelectedRecipe</br>
recipe_id:"", # from Class SelectedRecipe</br>
day_order:"1", # from Class Menu }</br>
Response: 202;

2. User store a day with recipes inside

api/v1/

api/v1/:day

BODY REQUEST: --> Header: 'Content-Type': 'application/json'
 

{ user_id, # from Class User</br>
recipe_id:"", # from Class SelectedRecipe</br>
day_id:"", # from Class SelectedRecipe</br>
recipe_name:"", # from Class Recipe </br>########## What is new respecte store in order or store all orders from one day ##########</br>
recipe_id:"", # from Class SelectedRecipe</br>
day_order:"1", # from Class Menu }</br>
Response: 202;

3. User store a WEEK

api/v1/

api/v1/recipes/:day

BODY REQUEST: --> Header: 'Content-Type': 'application/json'
 
api/v1/

api/v1/menu

BODY REQUEST: --> Header: 'Content-Type': 'application/json'
 

{ user_id, # from Class User</br>
"menu_id": ,# from Class Menu</br>
"menu_name": ,# from Class Menu</br>
recipe_id:"", # from Class SelectedRecipe</br>
day_id:"", # from Class SelectedRecipe</br>
recipe_name:"", # from Class Recipe </br>########## What is new respecte store in order or store all orders from one day ##########</br>
recipe_id:"", # from Class SelectedRecipe</br>
day_order:"1", # from Class Menu }</br>
Response: 202;
## SECTION WEEKS (ALL)
GET /api/v1/users/:user_id/weeks
detalles week get/api/v1/weeks/:weeks_id

## SECTION 
others
get no contiene body pero si
Query Params --> /users?name=Erwin

post/put no contienen query params pero siempre body
