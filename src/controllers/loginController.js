const express = require('express');

const router = express.Router();

const loginService = require('../services/loginService');
const validateLogin = require('../middlewares/validateLogin');

router.post('/', validateLogin, async (req, res) => {
    const { email, password } = req.body;

    const token = await loginService.authClient(email, password);

    if (token) {
        return res.status(200).json(`Your login was successful. Token: ${token}`);
    }
});

module.exports = router;
