const { BrokerAsset, Client, Operation, Account } = require('../database/models');

const buyAsset = async (clientId, assetId, quantity) => {
    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'quantity', 'value'],
        where: { id: assetId }
    });

    if (asset.dataValues.quantity < quantity) {
        throw { status: 404, message: 'This operation is not possible' };
    };

    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId }
    });

    if (!client) {
        throw { status: 404, message: 'Client does not exist' };
    };

    const valueBuy = (Number(asset.dataValues.value) * Number(quantity));

    const valueBalance = Number(client.dataValues.balance);
    
    if (valueBuy > valueBalance) {
        throw { status: 404, message: 'This operation is not possible' };
    };

    await Operation.create({
        clientId, 
        assetId: asset.id, 
        quantity: quantity,
        buy: true,
        sell: false
    }); 
 
    const clientBalance = (Number(client.balance) - (Number(asset.value) * Number(quantity)));

    await Client.update({ balance: clientBalance }, 
        { where: { clientId } });

    const valueBrokerAsset = (Number(asset.quantity) - Number(quantity));

    await BrokerAsset.update({ quantity: valueBrokerAsset }, 
        { where: { id: assetId } });
   
    const broker = await BrokerAsset.findOne({ 
        attributes: ['id', 'quantity'],
        where: { id: assetId }
    });

    if (broker.dataValues.quantity <= 0) {
        return await BrokerAsset.destroy({ where: { id: assetId } }); 
    };

    const account = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId: clientId, assetId: assetId }
    });
    
    if (!account || account === null) {
        return await Account.create( {clientId, assetId, quantity }); 
    };
        const valueAccount = (Number(account.dataValues.quantity) + Number(quantity));
        await Account.update({ quantity: valueAccount }, 
        { where: { clientId, assetId } });
};

const sellAsset = async (clientId, assetId, quantity) => {
    const client = await Client.findOne({ 
        attributes: ['clientId', 'balance'],
        where: { clientId }
    });

    if (!client) {
        throw { status: 404, message: 'Client does not exist' };
    };

    const account = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId, assetId }
    });

    if (!account || account === null) {
        throw { status: 404, message: 'This operation is not possible' }; 
    };

    if (account.dataValues.quantity < quantity) {
        throw { status: 404, message: 'This operation is not possible' };
    };

    if (account.dataValues.clientId === clientId && account.dataValues.assetId === assetId) {

        const valueAccount = (Number(account.dataValues.quantity) - Number(quantity));
        await Account.update({ quantity: valueAccount }, 
        { where: { clientId, assetId } });
    };

    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'quantity', 'value'],
        where: { id: assetId }
    });

    await Operation.create({
        clientId, 
        assetId, 
        quantity,
        buy: false,
        sell: true,
    }); 
 
    const clientBalance = (Number(client.balance) + (Number(asset.value) * Number(quantity)));

    await Client.update({ balance: clientBalance }, 
        { where: { clientId } });

    const brokerAssetValue = (Number(asset.quantity) + Number(quantity));

    await BrokerAsset.update({ quantity: brokerAssetValue }, 
        { where: { id: assetId } });

    const quantityAsset = await Account.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        where: { clientId, assetId }
    });

    if (quantityAsset.quantity <= 0) {
        return await Account.destroy({ where: { clientId, assetId } }); 
    };
};

module.exports = { buyAsset, sellAsset };