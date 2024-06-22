const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getEntries);
router.post('/', entriesController.createEntry);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);

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