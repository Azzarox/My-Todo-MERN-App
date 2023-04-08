const router = require('express').Router();
const authServices = require('../apiServices/authServices');

router.post('/login', (req, res) => {});

router.post('/register', async (req, res) => {
    const { username, password, repass } = req.body;

    try {
        if (password !== repass) {
            throw new Error('Password mismatch!');
        }

        const user = await authServices.register(username, password);

        res.status(201).json({
            id: user._id,
            username: user.username,
        });
        
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

module.exports = router;
