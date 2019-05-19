class MedicamentosDao {

    constructor(db) {
        this._db = db;
    }

    getMedicamentos() {
        const query = ``;
        return new Promise((resolve, reject) => {
            this._db.all(query, (err, rows) => {
                if (err) {
                    reject('Não foi possivel carregar os medicamentos');
                }

                resolve(rows);
            });
        });
    }
}

module.exports = MedicamentosDao;