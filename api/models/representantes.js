const { check } = require('express-validator/check');

const RepresentantesValidacoes = {};

RepresentantesValidacoes.listarPorId = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto'),
];

RepresentantesValidacoes.adicionar = () => [
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
    check('parentesco').toInt().withMessage('Parentesco deve ser selecionado')    
];

RepresentantesValidacoes.atualizar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto'),
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
    check('parentesco').toInt().withMessage('Parentesco deve ser selecionado')    
];

RepresentantesValidacoes.deletar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto')
];

module.exports = RepresentantesValidacoes;