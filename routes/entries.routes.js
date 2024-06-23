const express = require('express');

// Rutas
const router = express.Router();
const entriesController = require("../controllers/entries.controller");
const checkApiKey = require('../middlewares/auth_api_key');
const { validateCreateEntries, validateDeleteEntry, validateGetEntries, validateUpdateEntry } = require("../validators/entries.validators");

router.get('/', checkApiKey, validateGetEntries, entriesController.getEntries);
router.post('/', checkApiKey,validateCreateEntries, entriesController.createEntry);
router.put('/', checkApiKey, validateUpdateEntry, entriesController.updateEntry);
router.delete('/', checkApiKey, validateDeleteEntry, entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */

// PUT http://localhost:3000/api/entries

// const updatedEntry = {
//     title: "Se acabaron las tortillas del Markina",
//     content: "Estaban demasiado muy buenas y se las han comido todas",
//     date:"2024-06-17",
//     email: "guillermu@thebridgeschool.es",
//     category: "Sucesos",
//     old_title:"Se acabaron las mandarinas de TB"
// }

//DELETE http://localhost:3000/api/entries/

//deleteEntry('Estamos de Lunes de Back 2')