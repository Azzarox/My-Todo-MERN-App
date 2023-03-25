const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const router = require('./routes');

app.use(express.json());
app.use(cors()); // Needed for api requests

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
