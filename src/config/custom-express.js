require('marko/node-require'); // Allow Node.js to require and load `.marko` files

require('marko/express');

const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;