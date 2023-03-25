const uniqid = require('uniqid');
const todoServices = require('../apiServices/todoServices');

const createTimestamp = require('../utils/createTimestamp');
const router = require('express').Router();

const getAllTodos = (req, res) => {
    res.status(200).json(todoServices.getAllTodos());
};

const createTodo = (req, res) => {
    const newTodo = {
        id: uniqid(),
        title: 'Take a shower',
        description: 'Take a shower or you will repulse all the girls',
        timestamp: createTimestamp(),
        isDone: false,
    };

    const todos = todoServices.getAllTodos();
    todos.push(newTodo);
    res.json(newTodo);
};

const updateTodo = (req, res) => {
    const todo = todoServices.getTodo(req.params.id);
    todo.isDone = true;

    res.json(todo);
};

const getOneTodo = (req, res) => {
    const todo = todoServices.getTodo(req.params.id);
    res.json(todo);
};

router.get('/todos', getAllTodos);
router.get('/todos/:id', getOneTodo);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

module.exports = router;
