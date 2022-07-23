require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

require('express-async-errors');

const assetController = require('./controllers/assetController');
const accountController = require('./controllers/accountController');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());

app.use('/assets', assetController);
app.use('/account', accountController);
app.use(errorHandler);

const port = 3000;
app.listen(port, () => console.log('ouvindo porta', port));

module.exports = app;