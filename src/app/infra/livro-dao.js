class LivroDao {

    constructor(db) {

        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', 
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os Livros!')
                    return resolve(resultados);
                }
            )    
        })
    }
    /* refatoração eliminando a chamada ao callback para o uso de promise   
    lista(callback) {

        this._db.all(
            'SELECT * FROM livros', 
            (erro, resultados) => callback(erro, resultados)
        )
    } */
}
module.exports = LivroDao;