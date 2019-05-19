const HomeController = require('../controllers/Home-controller');
const home = new HomeController();

module.exports = app => {
    app.get(HomeController.rotas().home, home.index());
}