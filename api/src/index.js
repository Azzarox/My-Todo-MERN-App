const cors = require('cors');
const express = require('express');

require('dotenv').config();
const config = require('./config')[process.env.NODE_ENV];
const initializeDatabase = require('./config/mongoose');

const app = express();
const router = require('./routes');

require('./config/swagger.config')(app);

app.use(express.json());
app.use(cors()); // Needed for api requests

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});
app.use('/api', router);

initializeDatabase(config.DATABASE_URL)
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(`Server is listening on ${config.PORT}`);
        });
    })
    .catch((err) => console.log(`There was error with database ${err}`));
