# Application Information

The following website is a MERN (Mongo, Express, React, Node.js) TODO application where I have built the Api and the Client of the application. The application is not supposed to be something impressive but to practice building rest api and client and also deploying them.

-   The api is deployed using Render on: https://todo-mern-app-juco.onrender.com
-   The client is deployed using Firebase on: https://my-todo-mern-app.web.app/

## Api

More information for the *Api* can be found in the corresponding **README.md** file [*here*](./api/README.md)

## Client

More information for the *Client* can be found in the corresponding **README.md** file [*here*](./client/README.md)

## General Information

### Developing

Before everything all dependencies should be installed if they are not already. There are _3_ **package.json** files.

-   A general one which is inside the root folder. This package.json contains only the `concurrently` package for running with one command both the api and client dev servers.
-   An _API_ _package.json_ which contains the scripts and dependencies for the api. This is located in the [/api](./api/) folder.
-   An Client package.json which comes with React CRA which contains the dependencies of the client. The package.json is located inside the [/client](./client) folder.

### Scripts

`npm start` - as stated above it runs both development servers for the /api and /client.
