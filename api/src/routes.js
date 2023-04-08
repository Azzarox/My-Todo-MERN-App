const router = require('express').Router();
const todoController = require('./controllers/todoController');
const authController = require('./controllers/authController');

router.use('/', todoController);
router.use('/auth', authController);

module.exports = router;
