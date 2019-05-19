const { check } = require('express-validator/check');

class Medicamentos {
    static validacoes() {
        return [
            check('cns').toInt().withMessage('O CNS deve ser numerico!'),
            check('cns').isLength({min: 15, max: 15}).withMessage('O CNS deve possuir 15 caracteres!'),
            check('nome').exists().withMessage('Nome é obrigatorio!'),
            check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 5 caracteres!')            
        ];
    }
}

module.exports = Medicamentos;