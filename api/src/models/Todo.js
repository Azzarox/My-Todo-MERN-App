const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        isDone: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: { createdAt: true } }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
