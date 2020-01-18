
const app = require('./src/config/custom-express');

app.listen(3000, function (req, resp) {
    console.log('servidor rodando na porta 3000')
    
})

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
