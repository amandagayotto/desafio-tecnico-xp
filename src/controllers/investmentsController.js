const express = require('express');

const router = express.Router();

const investmentsService = require('../services/investmentsService');

router.post('/buy', async (req, res) => {
    const { clientId, assetId, quantity } = req.body;
    await investmentsService.buyAsset(clientId, assetId, quantity);

    return res.status(201).json({ message: 'Purchase has been completed' });
});

module.exports = router;