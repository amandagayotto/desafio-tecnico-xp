require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

require('express-async-errors');

const investmentsController = require('./controllers/investmentsController');
const assetController = require('./controllers/assetsController');
const accountController = require('./controllers/accountController');
const loginController = require('./controllers/loginController');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());

app.use('/investments', investmentsController);
app.use('/assets', assetController);
app.use('/account', accountController);
app.use('/login', loginController);
app.use(errorHandler);

const port = 3008;
app.listen(port, () => console.log('ouvindo porta', port));

module.exports = app;