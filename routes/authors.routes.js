const express = require('express');

const authorsController = require("../controllers/authors.controller");
const checkApiKey = require('../middlewares/auth_api_key');
const router = express.Router();
const { validateCreateAuthor, validateDeleteAuthor, validateGetAuthor, validateUpdateAuthor } = require("../validators/authors.validators");


router.get('/', checkApiKey, validateGetAuthor, authorsController.getAuthors);
router.post('/', checkApiKey, validateCreateAuthor, authorsController.createAuthor);
router.put('/', checkApiKey, validateUpdateAuthor, authorsController.updateAuthor);
router.delete('/', checkApiKey, validateDeleteAuthor, authorsController.deleteAuthor);

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors
// ejemplo para POST:
// let newAuthor = { 
//     name: "cabesaguevo",
//     surname: "lomismo",
//     email: "hander@thebridgeschool.es",
//     image: "foto"
// }

module.exports = router;