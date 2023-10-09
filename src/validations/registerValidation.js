const { body } = require('express-validator');

const registerValidator = [
    body('userName')
    .notEmpty()
    .withMessage('Complete este campo'),
    body('userPassword')
    .notEmpty()
    .withMessage('Complete este campo')
    .bail()
    .isLength({min: 8, max: 16})
    .withMessage('Minimo 8 letras y Maximo 16'),
    body('checkPassword')
    .custom((value, {req})=> value === req.body.userPassword).withMessage('Contraseña incorrecta')
];

module.exports = registerValidator;