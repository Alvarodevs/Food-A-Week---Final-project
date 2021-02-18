# Tablas 
User
Project : One user has many projects 
# Resources
base_url = api/v1
CRUD - USERS
GET /users : User list
QUERY PARAMS -> /users?name=Erwin&lastName=Aguero
- name
- lastName
BODY REQUEST: None
RESPONSE:
[
  {
   name: "Erwin",
   lastName : "Aguero",
   ... 
  },
  ...
]
POST /users
BODY REQUEST: ->  Header : 'Content-Type': 'application/json'
{
  name: "Erwin",
  lastName: "Aguero",
  .....
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
