const initialTodos = require('../data/data');

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

module.exports = todoServices;
