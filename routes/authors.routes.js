const express = require('express');

const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);
router.delete('/', authorsController.deleteAuthor);

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