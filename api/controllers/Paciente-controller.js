const PacienteController = require('../infra/Pacientes-dao');
const { validationResult } = require('express-validator/check');

class PacientesController {

    static rotas() {
        return {
            pacientes: '/pacientes',
            pacientesId: '/pacientes/:id'
        };
    }

    listar() {
        return (req, res) =>
            res.json({
                msg: `Rota listar pacientes`
            });
    }

    adicionar() {
        return (req, res) => {
            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                res.status(412).json({ Erros: erros.array() });
                return;
            }

            res.status(201).json({ msg: 'Paciente cadastrado com sucesso!' });
            return;
        };
    }

    listarPorId() {
        return (req, res) => {
            res.json({
                msg: `Rota listar paciente por id`
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

            res.status(201).json({ msg: 'Paciente atualizado com sucesso!' });
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

            res.status(202).json({ msg: 'Paciente deletado com sucesso!' });
            return;
        };
    }
}

module.exports = PacientesController;