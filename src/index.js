require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.API_PORT;
app.listen(port, () => console.log('ouvindo porta', port));

module.exports = app;