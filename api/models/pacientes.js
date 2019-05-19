const { check } = require('express-validator/check');

const PacientesValidacoes = {};

PacientesValidacoes.listarPorId = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto'),
];

PacientesValidacoes.adicionar = () => [
    check('cns').toInt().withMessage('O CNS deve ser numerico!'),
    check('cns').isLength({ min: 15, max: 15 }).withMessage('O CNS deve possuir 15 caracteres!'),
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!')
];

PacientesValidacoes.atualizar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto'),
    check('cns').toInt().withMessage('O CNS deve ser numerico!'),
    check('cns').isLength({ min: 15, max: 15 }).withMessage('O CNS deve possuir 15 caracteres!'),
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!')
];

PacientesValidacoes.deletar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto')
];

module.exports = PacientesValidacoes;