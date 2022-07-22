require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const assetController = require('./controllers/assetController');
const accountController = require('./controllers/accountController');

const app = express();
app.use(bodyParser.json());

app.use('/assets', assetController);
app.use('/account', accountController);

const port = process.env.API_PORT;
app.listen(port, () => console.log('ouvindo porta', port));

module.exports = app;