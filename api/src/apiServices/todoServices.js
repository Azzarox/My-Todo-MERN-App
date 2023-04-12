const initialTodos = require('../data/data');
const Todo = require('../models/Todo');

// const getAllTodos = () => {
//     return initialTodos;
// };

const getTodo = (id) => {
    return initialTodos.find((todo) => todo.id == id);
};

const getTodosByRecentWithFilter = (authorId, filter) => {
    if (!filter || filter === 'recent') {
        return Todo.find({ author: authorId }).sort({ createdAt: -1 });
    } else if (filter === 'completed') {
        return Todo.find({ author: authorId, isDone: true }).sort({
            createdAt: -1,
        });
    } else if (filter === 'incomplete'){
        return Todo.find({ author: authorId, isDone: false }).sort({
            createdAt: -1,
        });
    }
};

const getTodosByQuery = (authorId, query, filter) => {
    const regex = new RegExp(query, 'i'); // create regex for case-insensitive search
    if (filter === 'incomplete') {
        return Todo.find({
            author: authorId,
            title: { $regex: regex },
            isDone: false,
        }).sort({
            createdAt: -1,
        });
    } else if (filter === 'completed') {
        return Todo.find({
            author: authorId,
            title: { $regex: regex },
            isDone: true,
        }).sort({
            createdAt: -1,
        });
    } else if (filter === 'recent' || !filter) {
        return Todo.find({
            author: authorId,
            title: { $regex: regex },
        }).sort({
            createdAt: -1,
        });
    }
};

const todoServices = {
    getTodosByRecentWithFilter,
    getTodo,
    getTodosByQuery,
};

module.exports = todoServices;
