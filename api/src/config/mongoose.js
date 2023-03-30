const mongoose = require('mongoose');

const initializeDatabase = (DATABASE_URL) => {
    return mongoose.connect(DATABASE_URL);
};

module.exports = initializeDatabase;
