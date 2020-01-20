module.exports = (app) => {
    
    app.get('/', function (req, resp) {
    
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código. </h1>
                    </body> 
                </html>
            `
        );
        
    })
    
    app.get('/livros', function (req, resp) {
        /*
        resp.send(
             este conteúdo foi para o arquivo listagem.mako 
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
        */
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    })
};