const { BrokerAsset, Operation } = require('../database/models');

const getAssetById = async (id) => {
    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'code', 'quantity', 'value' ],
        where: { id },
    });

    if (!asset) {
        throw { status: 404, message: 'Asset does not exist' };
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
        throw { status: 404, message: 'Client does not exist' };
    }
    return client;
};

module.exports = { getAssetById, getAssetsByClient };