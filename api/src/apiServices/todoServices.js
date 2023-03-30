const initialTodos = require('../data/data');
const Todo = require('../models/Todo');

const getAllTodos = () => {
    return initialTodos;
};

const getTodo = (id) => {
    return initialTodos.find((todo) => todo.id == id);
};

const todoServices = {
    getAllTodos,
    getTodo,
};

const db_getAll = () => {
    return Todo.findOne(); // Returns promise
};

const db_getOne = (id) => {
    return Todo.findById(id)
}


// db_getAll()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err));

// db_getOne("642577d34c18cc939d2b5783")
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err));

module.exports = todoServices;
