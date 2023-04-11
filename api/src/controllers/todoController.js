const router = require('express').Router();

const uniqid = require('uniqid');

const compareTimestamps = require('../utils/compareTimestamps');
const createTimestamp = require('../utils/createTimestamp');

const todoServices = require('../apiServices/todoServices');

const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
    try {
        const filter = req.query.filter;
        let todos = await todoServices.getTodosByRecentWithFilter(
            req.user.id,
            filter
        );
        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

const getAllTodosByTitle = async (req, res) => {
    try {
        const title = req.query.title;
        let todos = await todoServices.getTodosByQuery(req.user.id, title);
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

const createTodo = async (req, res) => {
    const { title, description } = req.body;

    try {
        const todo = new Todo({ title, description });
        todo.author = req.user.id;

        await todo.save();

        res.status(201).json(todo);
    } catch (err) {
        res.status(400).json({
            message: err,
        });
    }
};

const updateTodo = async (req, res) => {
    try {
        

        // On the first request returns the old todo in db 
        // So it needs new true 
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                isDone: true,
            },
            { new: true }
        );

        console.log(todo);
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
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

router.get('/search', getAllTodosByTitle);
router.get('/:id', getOneTodo);
router.get('/', getAllTodos);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
