require('marko/node-require'); // Allow Node.js to require and load `.marko` files
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//midlleware para arquivos estáticos.
app.use('/estatico', express.static('src/app/public'));

//incluindo o midlleware body parser no app
app.use(bodyParser.urlencoded({
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;