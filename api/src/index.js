const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

const config = require('./config.json')[process.env.NODE_ENV];

app.use(express.json());
app.use(cors()); // Needed for api requests

app.use('/api', router);

app.listen(config.PORT, () => {
    console.log(`Server is listening on ${config.PORT}`);
});
