const { Client } = require('../database/models');

const getAccountByClientId = async (id) => {
    const account = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId: id },
    });
    
    if (!account) {
        throw { status: 404, message: 'Client not found' };
    }
    return account;
};

const makeWithdraw = async (clientId, value) => {
    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId },
    });

    if (!client) {
        throw { status: 404, message: 'Client not found' };
    }

    if (client.dataValues.balance < value) {
        throw { status: 404, message: 'Unable to complete your transaction' };
    }

    const updateAccount = await Client.update(
        { balance: Number(client.dataValues.balance) - Number(value) },
        { where: { clientId } })
};

const makeDeposit= async (clientId ,value) => {
    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId }
    });

    if (!client) {
        throw { status: 404, message: 'Client not found' };
    }

    const updateAccount = await Client.update(
        { balance: Number(client.dataValues.balance) + Number(value) },
        { where: { clientId } })
};

module.exports = { getAccountByClientId, makeWithdraw, makeDeposit };