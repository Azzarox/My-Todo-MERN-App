const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const initialTodos = require('./data/data');
const createTimestamp = require('./utils/createTimestamp');

app.use(express.json());
app.use(cors()); // Needed for api requests

app.get('/api', (req, res) => {
    res.json({
        message: 'MERN Todo App',
    });
});

const getAllTodos = (req, res) => {
    res.status(200).json(initialTodos);
};

const createTodo = (req, res) => {
    const newTodo = {
        title: 'Take a shower',
        description: "Take a shower or you will repulse all the girls",
        timestamp: createTimestamp(),
        isDone: false,
    };
    initialTodos.push(newTodo);
    res.json(initialTodos);
};

app.get('/api/todos', getAllTodos);

app.post('/api/todos', createTodo);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
