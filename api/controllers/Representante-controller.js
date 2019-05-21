const RepresentanteDAO = require('../infra/Representantes-dao');
const { validationResult } = require('express-validator/check');

class RepresentanteController {

    static rotas() {
        return {
            representantes: '/representantes',
            representantesId: '/representantes/:id'
        };
    }

    listar() {
        return (req, res) =>
            res.json({
                msg: `Rota listar representantes`
            });
    }

    adicionar() {
        return (req, res) => {
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                res.status(412).json({ Erros: erros.array() });
                return;
            }

            res.status(201).json({ msg: 'Representante cadastrado com sucesso!' });
            return;
        };
    }

    listarPorId() {
        return (req, res) => {
            res.json({
                msg: `Rota listar representante por id`
            })
        };
    }

    atualizar() {
        return (req, res) => {
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                res.status(412).json({ Erros: erros.array() });
                return;
            }

            res.status(201).json({ msg: 'Representante atualizado com sucesso!' });
            return;
        };
    }

    delete() {
        return (req, res) => {
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                res.status(412).json({ Erros: erros.array() });
                return;
            }

            res.status(202).json({ msg: 'Representante deletado com sucesso!' });
            return;
        };
    }
}

module.exports = RepresentanteController;