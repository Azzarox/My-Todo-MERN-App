const initialTodos = require('../data/data');
const Todo = require('../models/Todo');

// const getAllTodos = () => {
//     return initialTodos;
// };

const getTodo = (id) => {
    return initialTodos.find((todo) => todo.id == id);
};

const getTodosByRecentWithFilter = (filter) => {
    if (!filter) {
        return Todo.find().sort({ createdAt: -1 });
    } else if (filter === 'completed') {
        return Todo.find({ isDone: true }).sort({ createdAt: -1 });
    } else {
        return Todo.find({ isDone: false }).sort({ createdAt: -1 });
    }
};

const getTodosByQuery = (query) => {
    const regex = new RegExp(query, 'i'); // create regex for case-insensitive search
    return Todo.find({ title: { $regex: regex } }).sort({ createdAt: -1 });
};

const todoServices = {
    getTodosByRecentWithFilter,
    getTodo,
    getTodosByQuery,
};
// db_getAll()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err));

// db_getOne("642577d34c18cc939d2b5783")
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err));

module.exports = todoServices;
