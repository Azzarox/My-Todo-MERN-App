const User = require('../models/User');
const jwt = require('../utils/jwt');

const register = async (username, password) => {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        throw new Error('User already exists!');
    }

    return User.create({ username, password });
};

const login = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error("User with that username doesn't exist");
    }

    // Need to await to pass the error if such
    const isValid = await user.validatePassword(password);
    if (!isValid) {
        throw new Error("Username or password doesn't match");
    }

    const payload = { id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'ASDSADSAD');

    return token;
};

const authServices = {
    register,
    login,
};

module.exports = authServices;
