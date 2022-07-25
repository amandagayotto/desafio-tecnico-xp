const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const jwtConfig = (
    { expiresIn: '15m' },
    { algorithm: 'HS256'});

const validateToken = async (req, _res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        throw { status: 401, message: 'Token not found' };
    }

    try {
        await jwt.verify(token, SECRET, jwtConfig);
    } catch (err) {
        throw { status: 401, message: 'Expired or invalid token' };
    }

    next();
};

module.exports = validateToken;