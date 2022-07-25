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
        throw { status: 404, message: 'This operation is not possible' };
    }

    const valueWithdraw = (Number(client.dataValues.balance) - Number(value));
    await Client.update(
        { balance: valueWithdraw },
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

    const valueDeposit = (Number(client.dataValues.balance) + Number(value));
    await Client.update(
        { balance: valueDeposit },
        { where: { clientId } })
};

module.exports = { getAccountByClientId, makeWithdraw, makeDeposit };