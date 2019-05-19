class Home {

    static rotas() {
        return {
            home: '/'
        };
    }

    index() {
        return (req, res) =>
            res.json({
                status: `Servidor rodando na porta 2000`
            });
    }
}

module.exports = Home;