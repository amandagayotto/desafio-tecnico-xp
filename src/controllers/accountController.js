const express = require('express');

const router = express.Router();

const accountService = require('../services/accountService');
const validateToken = require('../middlewares/validateToken');
const validateAccount = require('../middlewares/validateAccount');


router.get('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const client = await accountService.getAccountByClientId(id);

    return res.status(200).json(client);
});

router.post('/withdraw', validateToken, validateAccount, async (req, res) => {
    const { clientId, value } = req.body;
    await accountService.makeWithdraw(clientId, value);

    return res.status(201).json({ message: 'Withdraw has been completed' });
});

router.post('/deposit', validateToken, validateAccount, async (req, res) => {
    const { clientId, value } = req.body;
    await accountService.makeDeposit(clientId, value);

    return res.status(201).json({ message: 'Deposit has been completed' });
});

module.exports = router;