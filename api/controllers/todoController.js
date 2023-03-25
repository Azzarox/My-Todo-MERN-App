const initialTodos = require('../data/data');
const createTimestamp = require('../utils/createTimestamp');

const router = require('express').Router();

const getAllTodos = (req, res) => {
    res.status(200).json(initialTodos);
};

const createTodo = (req, res) => {
    const newTodo = {
        title: 'Take a shower',
        description: 'Take a shower or you will repulse all the girls',
        timestamp: createTimestamp(),
        isDone: false,
    };
    initialTodos.push(newTodo);
    res.json(initialTodos);
};

router.get('/todos', getAllTodos);
router.post('/todos', createTodo);

module.exports = router;
