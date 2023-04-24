# API

## Using the API

The REST Api is deployed at: https://todo-mern-app-juco.onrender.com.

Upon clicking the link to the server it should open documentation of the api done with Swagger thus you can try out the endpoints. However, you can use the below information which should be sufficient enough for general overview of the api.


| Method | Route                       | Body                                                                                  | Requirements                                                                                   | Responses                                                                                                                      | Information                                                                                                                                                                        |
| ------ | --------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/auth/register`        | { "username":"exampleuser", "password": "examplepassword", "repass:"examplepassword"} | N/A                                                                                            | `201 Created`: Returns object with the user's id and username <br> `400 Bad Request`: Returns message with the error's message | Creates user in the database                                                                                                                                                       |
| POST   | `/api/auth/login`           | { "username":"exampleuser", "password": "examplepassword"}                            | N/A                                                                                            | `200 OK`: Returns a JWT Token <br> `400 Bad Request`: Returns message with the error's message                                 | Authenticates the user                                                                                                                                                             |
| GET    | `/api/todos`                | N/A                                                                                   | Authorization header in the format `Bearer <token>`                                            | `200 OK`: Returns a list of the currently logged user's todos <br> `401 Unauthorized`                                          | Queries all the todos. By default its all recent ones.                                                                                                                             |
| POST   | `/api/todos`                | { "title":"sometitle", "description":"somedescription" }                              | Authorization header in the format `Bearer <token>`                                            | `201 Created` Returns the created todo object <br> `401 Unauthorized`                                                          | Creates todo and automatically adds the user as author                                                                                                                             |
| GET    | `/api/todos?filter=`       | N/A                                                                                   | Authorization header in the format `Bearer <token>`                                            | `200 OK`: Returns the logged user's todos by filter <br> `401 Unauthorized`                                                    | Returns the user's todos set by querystring with _filter_. Choices are `incomplete`, `complete` or `recent`. Defaults to _recent_                                                  |
| GET    | `/api/todos?filter=&title=` | N/A                                                                                   | Authorization header in the format `Bearer <token>`                                            | `200 OK`: Returns the logged user's todos by filter and title <br> `401 Unauthorized`                                          | Returns the user's todos set by querystring with _filter_ and _title_. For the filter the choices are the same as above. Defaults to _recent_. For the title it could be anything. |
| PUT    | `/api/todos/:id`            | { "isDone": "true"}                                                                   | Authorization header in the format `Bearer <token>` and the **id** of the todo in the URL path | `200 OK`: Returns the todo object and and isDone value set as true <br> `400 Bad Request` <br> `401 Unauthorized`              | Updates the todo and makes it completed by changing the isDone value to true                                                                                                       |
| DELETE | `/api/todos/:id`            | N/A                                                                                   | Authorization header in the format `Bearer <token>` and the **id** of the todo in the URL path | `200 OK`: Returns the deleted todo object <br> `400 Bad Request` <br> `401 Unauthorized`                                       | Deletes the todo and returns the deleted todo object                                                                                                                               |

## General Information
All dependencies should be installed before doing anything, and after that there should be `.env` file with the required variables which can be found in [`.env.example`](.env.example).
### Developing and extending the API


There are two _main_ scripts which can be run.

The first is `npm start`.This is the development script which starts the development server using [`config.js`](./src/config.js) configuration for development.

The second one is `npm run start:prod`. This is the production script which starts the server with production configuration which is also in the `config.js`.

There are two more script which are only for developing and are related to `eslint`. The one runes the linter to check for errors the other one automatically fixes the found errors if it is possible.

### Deploying changes

To deploy changes they should be committed and pushed to the repository. The service (Render) tracks only the /api folder.

Disclaimer: If you want to deploy the api on different Render account the only requirements is for environment variables on the Render platform to have DATABASE_URL and JWT_SECRET. 

[Go Back](../README.md)
