const express = require('express');

const router = express.Router();

const assetService = require('../services/assetService');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const asset = await assetService.getAssetById(id);

    if (asset === false) {
        return res.status(404).json({ message: 'Asset does not exist' });
    }

    return res.status(200).json(asset);
});

module.exports = router;