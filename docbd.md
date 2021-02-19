# Tablas 

User : - One user has many menus
       - One user has many restrictions

Ingredient : One ingredient has many restrictions 

Restriction :

Recipe : One recipe has many recipedetail (one recipedetail per ingredient)

Recipedetail : One recipedetail has many ingredient

Selectedrecipe : Many selectedrecipe have many days (MISSING THIS RELATIONSHIP IN DB)

Menu : One menu has many days

Day : Many days have many selectedrecipe

# Resources

base_url = api/v1

CRUD - USERS

GET /user : User list

QUERY PARAMS -> /user?name=John&lastName=Smith
- id
- username
- email 
- name 
- lastname
- address
- postalcode
- phone
- restrictions

BODY REQUEST: None
RESPONSE:
[
  {
    id: "1",
    username: "Foodie",
    email: "okok@okok.com", 
    name: "John", 
    lastname: "Smith",
    address: "Whatever St.3",
    postalcode: "654654",
    phone: "123123121123",
    restrictions: "restriction_id"
  },
]
-----------------------------------
POST /users

BODY REQUEST: ->  Header : 'Content-Type': 'application/json'
{
  id: "1",
    username: "Foodie",
    email: "okok@okok.com", 
    name: "John", 
    lastname: "Smith",
    address: "Whatever St.3",
    postalcode: "654654",
    phone: "123123121123",
    restrictions: "restriction_id"
}
RESPONSE: CODE 201
RESPONSE:
GET /users/:user_id
PATCH/PUT /users/:user_id
DELETE /users/:user_id
Nested Routes 
User's projects
GET /api/v1/users/:user_id/projects
RESPONSE:
[
  {
    user_id: 1,
    id: 2
    name: "proyecto B"
  }
]
CRUD - PROJECTS
GET /api/v1/projects
GET /api/v1/projects/:project_id
