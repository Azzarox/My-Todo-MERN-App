const User = require('../models/User');

const register = async (username, password) => {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        throw new Error('User already exists!');
    }
    
    return User.create({ username, password });
};

const authServices = {
    register,
};

module.exports = authServices;
