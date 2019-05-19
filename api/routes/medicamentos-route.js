const medicamentosController = require('../controllers/Medicamentos-controller');
const medicamentos = new medicamentosController();
const validacao = require('../models/medicamentos');

module.exports = app => {
    app.route(medicamentosController.rotas().medicamentos)
        .get(medicamentos.listar())
        .post(validacao.adicionar(), medicamentos.adicionar());

    app.route(medicamentosController.rotas().medicamnetoId)
        .get(validacao.listar(), medicamentos.listarPorId())
        .put(validacao.atualizar(), medicamentos.atualizar())
        .delete(validacao.deletar(), medicamentos.delete());
};