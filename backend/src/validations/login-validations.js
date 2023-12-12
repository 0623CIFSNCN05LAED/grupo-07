const { body } = require("express-validator") 

module.exports = [
    body("user-name")
        .notEmpty()
        .withMessage("Debe completar este campo"),
    body("user-password")
        .notEmpty()
        .withMessage("Debe completar este campo")
]