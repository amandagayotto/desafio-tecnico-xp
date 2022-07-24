const express = require('express');

const router = express.Router();

const investmentsService = require('../services/investmentsService');
const validateInvestments = require('../middlewares/validateInvestments');

router.post('/buy', validateInvestments, async (req, res) => {
    const { clientId, assetId, quantity } = req.body;
    await investmentsService.buyAsset(clientId, assetId, quantity);

    return res.status(201).json({ message: 'Purchase has been completed' });
});

router.post('/sell', validateInvestments, async (req, res) => {
    const { clientId, assetId, quantity } = req.body;
    await investmentsService.sellAsset(clientId, assetId, quantity);

    return res.status(201).json({ message: 'Sale has been completed' });
});

module.exports = router;