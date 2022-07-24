const { BrokerAsset, Account } = require('../database/models');

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
    const client = await Account.findAll({ 
        where: { clientId: id },
        include: [{ model: BrokerAsset, as: 'asset', attributes: ['value'] }]
    });

    if (client.length === 0) {
        throw { status: 404, message: 'Client does not exist' };
    }
    return client;
};

module.exports = { getAssetById, getAssetsByClient };