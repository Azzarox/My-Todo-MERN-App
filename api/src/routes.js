const router = require('express').Router();
const todoController = require('./controllers/todoController');
const authController = require('./controllers/authController');

const authMiddleware = require('./middlewares/authMiddleware');

router.use('/auth', authController);
router.use('/todos', authMiddleware, todoController);

module.exports = router;
