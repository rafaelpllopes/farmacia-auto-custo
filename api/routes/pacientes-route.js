const pacientesController = require('../controllers/Paciente-controller');
const pacientes = new pacientesController();
const validacao = require('../models/pacientes');

module.exports = app => {
    app.route(pacientesController.rotas().pacientes)
        .get(pacientes.listar())
        .post(validacao.adicionar(), pacientes.adicionar());

    app.route(pacientesController.rotas().pacientesId)
        .get(validacao.listarPorId(), pacientes.listarPorId())
        .put(validacao.atualizar(), pacientes.atualizar())
        .delete(validacao.deletar(), pacientes.delete());
};