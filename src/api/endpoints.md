# EndpointsGET 

1. EndpointGET users

```sh
api/v1/users
GET /api/v1/users/:id
GET /api/v1/users
Request Body: None
Response: 
[
{
 "id" : 1, 
 "email": "example@test.com"
},
....
]
```


```sh
GET /api/v1/users/:id
Response body
{
 "id" : 1, 
 "email": "example@test.com"
}
```