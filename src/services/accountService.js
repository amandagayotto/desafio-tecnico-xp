const { Account } = require('../database/models');

const getAccountByClientId = async (id) => {
    const account = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId: id },
    });
    
    if (!account) {
        throw { status: 404, message: 'Client not found' };
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
    throw { status: 404, message: 'Client not found' };
};

const makeDeposit= async (clientId,value) => {
    const client = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId },
    });

    if (client) {
        const update = await Account.update(
            { balance: Number(client.dataValues.balance) + Number(value) },
            { where: { clientId } }
    );

    const account = await Account.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId },
    });
        return account;
    }
    throw { status: 404, message: 'Client not found' };
};

module.exports = { getAccountByClientId, makeWithdraw, makeDeposit };