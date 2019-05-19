const { check } = require('express-validator/check');

const MedicamentosValidacoes = {};

MedicamentosValidacoes.listar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto')
];

MedicamentosValidacoes.adicionar = () => [
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
    check('medida').exists().withMessage('Medida é obrigatoria'),
    check('medida').isNumeric().withMessage('Medida deve ser numerica'),
    check('tipo').exists().withMessage('Tipo é obrigatorio'),
    check('tipo').isInt().withMessage('Tipo deve ser selecionado')
];

MedicamentosValidacoes.atualizar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto'),
    check('nome').exists().withMessage('Nome é obrigatorio!'),
    check('nome').isLength({ min: 3 }).withMessage('O nome precisa ter no mínimo 3 caracteres!'),
    check('medida').exists().withMessage('Medida é obrigatoria'),
    check('medida').isNumeric().withMessage('Medida deve ser numerica'),
    check('tipo').exists().withMessage('Tipo é obrigatorio'),
    check('tipo').isInt().withMessage('Tipo deve ser selecionado')
];

MedicamentosValidacoes.deletar = () => [
    check('id').exists().withMessage('Id é obrigatoria'),
    check('id').isInt().withMessage('Deve estar correto')
];

module.exports = MedicamentosValidacoes;