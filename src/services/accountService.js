const { Account } = require('../database/models');

const getAccountByClientId = async (id) => {
    const account = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId: id },
    });
    
    if (!account) {
       return ({ message: 'Client not found' });
    }

    return account;
};

module.exports = { getAccountByClientId };