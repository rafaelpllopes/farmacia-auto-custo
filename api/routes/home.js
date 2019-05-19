const HomeController = require('../controllers/home-controller');
const home = new HomeController();

module.exports = app => {
    app.get(HomeController.rotas().home, home.index());
}