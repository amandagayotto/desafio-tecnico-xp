const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const jwtConfig = (
    { expiresIn: '15m' },
    { algorithm: 'HS256'});

const generateJWTToken = (payload) => {
   const result = jwt.sign(payload, SECRET, jwtConfig);
   return result;
};

module.exports =  { generateJWTToken };