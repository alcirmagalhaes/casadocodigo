require('marko/node-require'); // Allow Node.js to require and load `.marko` files
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//midlleware para arquivos estáticos.
app.use('/estatico', express.static('src/app/public'));

//incluindo o midlleware body parser no app
app.use(bodyParser.urlencoded({
    extended: true
}));

//inclindo o midlleware method override.
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;