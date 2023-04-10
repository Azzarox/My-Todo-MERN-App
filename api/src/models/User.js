const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    todos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
    },
});

// Made so " asdasd  " is "asdasd";
userSchema.pre('save', function (next) {
    this.username = this.username.trim();
    next();
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;

        next();
    });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;
