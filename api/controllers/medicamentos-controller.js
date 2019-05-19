const MedicamentosDao = require('../infra/medicamentos-dao');
const { validationResult } = require('express-validator/check');

class MedicamentosRoute {

    static rotas() {
        return {
            medicamentos: '/medicamentos'
        };
    }

    listar() {
        return (req, res) =>
            res.json({
                status: `Servidor rodando na porta 2000`
            });
    }

    adicionar() {
        return (req, res) => {
            const erros = validationResult(req);
            
            if (!erros.isEmpty()) {
                res.json({Erros: erros.array()});
            }


        }
    }
}

module.exports = MedicamentosRoute;