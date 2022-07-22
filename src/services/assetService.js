const { BrokerAsset, Operation } = require('../database/models');

const getAssetById = async (id) => {
    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'code', 'quantity', 'value' ],
        where: { id },
    });

    if (!asset) {
       return false;
    }

    return asset;
};

const getAssetsByClient = async (id) => {
    const client = await Operation.findOne({ 
        attributes: ['clientId', 'assetId', 'quantity'],
        include: [{ model: BrokerAsset, as: 'asset', attributes: ['value'] }],
        where: { clientId: id }
    });

    if (client.dataValues === undefined) {
       return false;
    }

    return client;
};

module.exports = { getAssetById, getAssetsByClient };