const express = require('express');
const consign = require('consign');
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const app = express();
const fs = require('fs');
const sha256 = require('sha256');

app.set('port', 2000);

const secret = fs.readFileSync("secret.txt", "utf8");
app.set('secret', sha256(secret));

const corsOptions = {
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    exposedHeaders: ['x-access-token']
};

app.set('json spaces', 4);
app.use(cors(corsOptions));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    next();
});

consign()
    .include('routes')
    .into(app);

app.use('*', (req, res) => {
    res.status(404).json({ msg: `rota ${req.originalUrl} não existe!` });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal server error' });
});



module.exports = app;