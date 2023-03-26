const router = require('express').Router();
const todoController = require('./src/controllers/todoController')

router.use('/', todoController);

module.exports = router;
