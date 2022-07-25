const express = require('express');

const router = express.Router();

const assetService = require('../services/assetsService');
const validateToken = require('../middlewares/validateToken');

router.get('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const asset = await assetService.getAssetById(id);
    
    return res.status(200).json(asset);
});

router.get('/client/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const clientAssets = await assetService.getAssetsByClient(id);

    return res.status(200).json(clientAssets);
});

module.exports = router;