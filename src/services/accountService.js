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

const makeWithdraw = async (clientId, value) => {
    const client = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId },
    });

    if (client) {
        const updateAccount = await Account.update(
            { balance: Number(client.dataValues.balance) - Number(value) },
            { where: { clientId } }
    );

    const account = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId },
    });
        return account;
    }

    return ({ message: 'Client not found' });
};

module.exports = { getAccountByClientId, makeWithdraw };