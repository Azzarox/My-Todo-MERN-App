const router = require('express').Router();

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
        const filter = req.query.filter;
        let todos = await todoServices.getTodosByQuery(
            req.user.id,
            title,
            filter
        );
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
        const { isDone } = req.body;
        if (isDone !== true) throw new Error('bad request body');

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

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
};
const deleteAllTodos = async (req, res) => {
    try {
        const todos = await Todo.deleteMany({ author: req.user.id });
        res.status(200).json(todos);
        // res.status(200).json({message: "delete"})
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
};

router.get('/search', getAllTodosByTitle);

router.get('/', getAllTodos);
router.delete('/', deleteAllTodos);
router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = router;
