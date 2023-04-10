const { JWT_SECRET } = require('../../constants');
const jwt = require('../utils/jwt');

const authMiddleware = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    const [_, token] = bearer.split(' ');
    if (!token) {
        res.status(401);
        res.json({ message: 'Unauthorized' });
        return;
    }

    try {
        const user = await jwt.verify(token, JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
};

module.exports = authMiddleware
//
