const medicamentosController = require('../controllers/medicamentos-controller');
const medicamentos = new medicamentosController();

module.exports = app => {
    app.route(medicamentosController.rotas().medicamentos)
        .get(medicamentos.listar())
        .post(medicamentos.adicionar()) ;
};