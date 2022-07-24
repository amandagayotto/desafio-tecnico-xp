const { BrokerAsset, Client, Operation, Account } = require('../database/models');

const buyAsset = async (clientId, assetId, quantity) => {
    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'quantity', 'value'],
        where: { id: assetId }
    });

    if (asset.dataValues.quantity < quantity) {
        throw { status: 404, message: 'This operation is not possible' };
    }

    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId }
    });

    if (!client) {
        throw { status: 404, message: 'Client does not exist' };
    }
    
    await Operation.create({
        clientId, 
        assetId: asset.id, 
        quantity: quantity,
        buy: true,
        sell: false
    }); 
 
    await Client.update({ balance: Number(client.balance) - (Number(asset.value) * Number(quantity)) }, 
        { where: { clientId: clientId } });

    await BrokerAsset.update({ quantity: Number(asset.quantity) - Number(quantity) }, 
        { where: { id: assetId } });

    const account = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId: clientId, assetId: assetId }
    });

    if (!account ) {
        await Account.create({ clientId: clientId, assetId: assetId, quantity: quantity }); 
    }

    if (account.dataValues.clientId === clientId && account.dataValues.assetId === assetId) {
        await Account.update({ quantity: Number(account.dataValues.quantity) + Number(quantity) }, 
        { where: { clientId: clientId, assetId: assetId } });
    }
};

const sellAsset = async (clientId, assetId, quantity) => {
    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId }
    });

    if (!client) {
        throw { status: 404, message: 'Client does not exist' };
    }

    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'quantity', 'value'],
        where: { id: assetId }
    });
    
    await Operation.create({
        clientId, 
        assetId: asset.id, 
        quantity: quantity,
        buy: true,
        sell: false
    }); 
 
    await Client.update({ balance: Number(client.balance) + (Number(asset.value) * Number(quantity)) }, 
        { where: { clientId: clientId } });

    await BrokerAsset.update({ quantity: Number(asset.quantity) + Number(quantity) }, 
        { where: { id: assetId } });

    const account = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId: clientId, assetId: assetId }
    });

    if (!account ) {
        throw { status: 404, message: 'This operation is not possible' }; 
    }

    if (account.dataValues.quantity < quantity) {
        throw { status: 404, message: 'This operation is not possible' };
    }

    if (account.dataValues.clientId === clientId && account.dataValues.assetId === assetId) {
        await Account.update({ quantity: Number(account.dataValues.quantity) - Number(quantity) }, 
        { where: { clientId: clientId, assetId: assetId } });
    }

    const quantityAsset = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId: clientId, assetId: assetId }
    });

    if (quantityAsset.quantity <= 0) {
        await Account.destroy({ where: { clientId: clientId, assetId: assetId } }); 
    }
};

module.exports = { buyAsset, sellAsset };