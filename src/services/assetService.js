const { BrokerAsset, Operation } = require('../database/models');

const getAssetById = async (id) => {
    const asset = await BrokerAsset.findOne({ 
        attributes: ['id', 'code', 'quantity', 'value' ],
        where: { id },
    });
    console.log('service', asset);

    if (!asset) {
       return false;
    }

    return asset;
};

module.exports = { getAssetById };