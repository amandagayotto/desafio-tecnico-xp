const express = require('express');

const router = express.Router();

const assetService = require('../services/assetsService');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const asset = await assetService.getAssetById(id);

    return res.status(200).json(asset);
});

router.get('/client/:id', async (req, res) => {
    const { id } = req.params;
    const clientAssets = await assetService.getAssetsByClient(id);

    return res.status(200).json(clientAssets);
});

module.exports = router;