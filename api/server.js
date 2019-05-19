const app = require('./config/express');

app.listen(2000, 
        () => console.log(`Servidor rodando na porta ${app.get('port')}`));