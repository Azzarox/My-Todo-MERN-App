# Client

The Client is deployed at: https://my-todo-mern-app.web.app/

## General Information

All dependencies should be installed before doing anything, and after that there should be **.env** file with the required variables which can be found in [.env.example.](.env.example)

## Developing and extending the application

If you want to use a local api (ex. localhost:3001) there are few steps that you need to take.

First you should have the environment variable for the dev server inside *.env*. 

Second you need to change the ***process.env.REACT_APP_API_BASE_URL*** to ***process.env.REACT_APP_API_DEV_BASE_URL*** inside the files:
- [register and login handlers](./src/services/authServices.js)
- [requester function](./src/services/requester.js)


## Deploying changes

After there are some changes which you want to be reflected to the deployed version you need to run the production build which comes from the React CRA.
Run `npm run build` which will create the /dist folder and there is the compressed application and optimized for deploying.

After that is done you run `firebase deploy` to deploy the changes.

Disclaimer: If you have different firebase project it may not work  since the app is bound to a project in Firebase which is different for each user of Firebase. You will need to redeploy it using your project.
Same goes for the api deployment on Render.

[Go Back](../README.md)
