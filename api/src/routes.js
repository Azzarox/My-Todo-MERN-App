const router = require('express').Router();

const authController = require('./controllers/authController');
const todoController = require('./controllers/todoController');

const authMiddleware = require('./middlewares/authMiddleware');

router.use('/auth', authController);
router.use('/todos', authMiddleware, todoController);

module.exports = router;
