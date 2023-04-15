const swaggerDocument = require('../swagger.json');
const swaggerUi = require('swagger-ui-express');

const swaggerUiOptions = {
    defaultModelRendering: 'model',
};
const swaggerConfig = (app) => {
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument, swaggerUiOptions)
    );
};
module.exports = swaggerConfig;
