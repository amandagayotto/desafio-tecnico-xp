const express = require('express');

const router = express.Router();

const accountService = require('../services/accountService');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const client = await accountService.getAccountByClientId(id);

    return res.status(200).json(client);
});

router.post('/withdraw', async (req, res) => {
    const { clientId, value } = req.body;
    const account = await accountService.makeWithdraw(clientId, value);

    return res.status(201).json(account);
});

router.post('/deposit', async (req, res) => {
    const { clientId, value } = req.body;
    const account = await accountService.makeDeposit(clientId, value);

    return res.status(201).json(account);
});

module.exports = router;