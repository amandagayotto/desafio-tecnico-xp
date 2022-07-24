const { Client } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const authClient = async (email, password) => {
    const client = await Client.findOne({ 
        attributes: ['email'],
        where: { email, password }
    });

    if (!client) {
        throw { status: 404, message: 'Invalid email or password' };
    }
    
    const payload = client.dataValues.email;
    const token = generateJWTToken(payload);
        return token;
};

module.exports = { authClient };