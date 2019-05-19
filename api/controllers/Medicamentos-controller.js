const MedicamentosDao = require('../infra/Medicamentos-dao');
const { validationResult } = require('express-validator/check');

class MedicamentosController {

    static rotas() {
        return {
            medicamentos: '/medicamentos',
            medicamnetoId: '/medicamentos/:id'
        };
    }

    listar() {
        return (req, res) =>
            res.json({
                msg: `Rota listar medicamentos`
            });
    }

    adicionar() {
        return (req, res) => {
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                res.status(412).json({ Erros: erros.array() });
                return;
            }

            res.status(201).json({ msg: 'Medicamento cadastrado com sucesso!' });
            return;
        };
    }

    listarPorId() {
        return (req, res) => {
            res.json({
                msg: `Rota listar medicamentos por id`
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

            res.status(201).json({ msg: 'Medicamento atualizado com sucesso!' });
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

            res.status(202).json({ msg: 'Medicamento deletado com sucesso!' });
            return;
        };
    }
}

module.exports = MedicamentosController;