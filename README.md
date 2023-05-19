# Application Information


# IMPORTANT:
***Sometimes due to Render inactivity period, the client, when opened after some time of inactivity, it may not make the requests to the server. In this case its better to click on the link for the api and wait out the initial load (it may take a few minutes).***

**This happens because Render's inactivity is around 15 minutes and after that it stops the server.**

**Update: When you open the client app with the https://my-todo-mern-app.web.app/ and if the server is sleeping it would take around 1-2 minutes (sometimes even less) to start the server without the need to go to the https://todo-mern-app-juco.onrender.com to manually start it. You could monitor that in the Network tab of the browser. Usually, the first request will be blocked since the server is sleeping. However, after the "waking up" time passes the next requests should work fine.**

---

The following website is a MERN (Mongo, Express, React, Node.js) TODO application where I have built the Api and the Client of the application. The application is not supposed to be something impressive but to practice building rest api and client and also deploying them.

-   The api is deployed using Render on: https://todo-mern-app-juco.onrender.com
-   The client is deployed using Firebase on: https://my-todo-mern-app.web.app/

## Api

More information for the *Api* can be found in the corresponding **README.md** file [*here*](./api/README.md)

## Client

More information for the *Client* can be found in the corresponding **README.md** file [here](./client/README.md)

## General Information

## Developing

Before everything all dependencies should be installed if they are not already. There are _3_ **package.json** files.

-   A general one which is inside the root folder. This package.json contains only the `concurrently` package for running with one command both the api and client dev servers.
-   An _API_ _package.json_ which contains the scripts and dependencies for the api. This is located in the [/api](./api/) folder.
-   An *Client package.json* which comes with React CRA which contains the dependencies of the client. The package.json is located inside the [/client](./client) folder.

## Scripts

`npm start` - as stated above it runs both development servers for the /api and /client.

## Docker
Both containers are not meant for developing in the sense of developing the app and the changes to be reflected on the container. This is so because there are no volumes attached.

### API container
The api container is built from the [Dockerfile](/api/Dockerfile). 

To build the image run:  `docker build -t <somenamefortheimage> .`

The dot at the end means that the Dockerfile is in the current directory, so you **need to be** in the directory where is the Dockerfile (which is **/api**) and then run the build command.

To run the container: `docker run -dp 3001:3001 -e DEV_DATABASE_URL="mongo_connection_string"`. 


This will run the container in detached mode with 3001 ports exposed. However, you need to provide a database sting in the environment variable.

### Client container
The client container is built from the [Dockerfile](/client/Dockerfile). To build the image run: 
`docker build -t <somenamefortheimage> .`

The dot at the end means that the Dockerfile is in the current directory, so you **need to be** in the directory where  the Dockerfile is located (which is **/client**) and then run the build command.

To run the container: `docker run -dp 3000:3000`. 

This will run the container in detached mode with 3000 ports exposed. By default it looks for api working on http://localhost:3001. Which is the api container. 

### Docker-Compose
There is [docker-compose.yml](./docker-compose.yml) file inside the root directory. However, before running the command, the environment variable inside the docker-compose.yml under the **api** service, should be changed to a **mongo connection string**. 

After that run the containers using `docker-compose up` or `docker-compose up -d` for detached mode. 
*The command should be run from where docker-compose.yml is located*. Also in order to work, the Dockerfiles for the *api* and *client* should be in their respective folders - **/api** and **/client**.

