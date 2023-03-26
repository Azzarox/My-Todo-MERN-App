const uniqid = require('uniqid');
const todoServices = require('../apiServices/todoServices');
const compareTimestamps = require('../utils/compareTimestamps');

const createTimestamp = require('../utils/createTimestamp');
const router = require('express').Router();

const getAllTodos = (req, res) => {
    try {
        const filter = req.query.filter;
        let todos = todoServices.getAllTodos();

        // This by default will get the recent
        todos = todos.sort((a, b) => compareTimestamps(a, b));

        if (filter === 'completed') {
            todos = todos.filter((todo) => todo.isDone);
        } else if (filter === 'incomplete') {
            todos = todos.filter((todo) => !todo.isDone);
        }

        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: err });
    }
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
