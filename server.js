
const app = require('./src/config/custom-express');

// criação do servidor
app.listen(3000, function (req, resp) {
    console.log('servidor rodando na porta 3000')
    
});
/* 
todas as rotas foram para ./src/app/rotas/rotas.js
app.get('/', function (req, resp) {

    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `
    );
    
})

app.get('/livros', function (req, resp) {

    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `
    );
    
})
 */