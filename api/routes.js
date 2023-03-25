const router = require('express').Router();
const todoController = require('./controllers/todoController');

router.use('/', todoController);

module.exports = router;
