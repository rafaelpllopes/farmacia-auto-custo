const representantesController = require('../controllers/Representante-controller');
const representantes = new representantesController();
const validacao = require('../models');

module.exports = app => {
    app.route(representantesController.rotas().representantes)
        .get(representantes.listar())
        .post(validacao.adicionar(), representantes.adicionar());

    app.route(representantesController.rotas().representantesId)
        .get(validacao.listarPorId(), representantes.listarPorId())
        .put(validacao.atualizar(), representantes.atualizar())
        .delete(validacao.deletar(), representantes.delete());
};