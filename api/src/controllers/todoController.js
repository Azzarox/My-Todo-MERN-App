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

const getAllTodosByTitle = (req, res) => {
    try {
        const title = req.query.title;
        const regex = new RegExp(title, 'i'); // Creates a regex with the querystring
        let todos = todoServices
            .getAllTodos()
            .filter((todo) => regex.test(todo.title)); // Filters if todo.title passes the regex.test;
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};
const createTodo = (req, res) => {
    const { title, description } = req.body;

    try {
        const newTodo = {
            id: uniqid(),
            title,
            description,
            timestamp: createTimestamp(),
            isDone: false,
        };

        const todos = todoServices.getAllTodos();
        todos.push(newTodo);

        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
};

const updateTodo = (req, res) => {
    const todo = todoServices.getTodo(req.params.id);
    todo.isDone = true;

    res.json(todo);
};

const getOneTodo = (req, res) => {
    try {
        const todo = todoServices.getTodo(req.params.id);
        res.json(todo);
    } catch (err) {
        res.status(404).json({
            message: 'Resource not found',
        });
    }
};

const deleteTodo = (req, res) => {
    const todoToDelete = todoServices.getTodo(req.params.id);
    res.json(todoToDelete);
};

router.get('/todos/search', getAllTodosByTitle);
router.get('/todos/:id', getOneTodo);
router.get('/todos', getAllTodos);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

module.exports = router;
