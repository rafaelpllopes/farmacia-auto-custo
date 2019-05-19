class HomeController {

    static rotas() {
        return {
            home: '/'
        };
    }

    index() {
        return (req, res) =>
            res.status(200).json({
                status: `Servidor rodando na porta 2000`
            });
    }
}

module.exports = HomeController;