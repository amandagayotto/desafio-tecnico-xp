const express = require('express');

const router = express.Router();

const accountService = require('../services/accountService');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const client = await accountService.getAccountByClientId(id);

    return res.status(200).json(client);
});

module.exports = router;