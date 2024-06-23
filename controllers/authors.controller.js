const author = require('../models/authors.model'); // Importar el modelo de la BBDD
const { validationResult } = require("express-validator");


// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await author.getAuthorByEmail(req.query.email);
        }
        else {
            authors = await author.getAllAuthors();
        }
        res.status(200).json(authors); // [] con las authors encontradas
    } catch {
        res.status(500).json({ "error": "error en la BBDD" }); // [] con las authors encontradas

    }
};

const createAuthor = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newAuthor = req.body; // {name, surname, email, img}
    if (
        "name" in newAuthor &&
        "surname" in newAuthor &&
        "email" in newAuthor &&
        "image" in newAuthor
    ) {
        try {
            const response = await author.createAuthor(newAuthor);
            res.status(201).json({
                items_created: response,
                data: newAuthor,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

const updateAuthor = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const modifiedAuthor = req.body; // {name, surname, email, image, old_email}
    if (
        "name" in modifiedAuthor &&
        "surname" in modifiedAuthor &&
        "email" in modifiedAuthor &&
        "image" in modifiedAuthor &&
        "old_email" in modifiedAuthor
    ) {
        try {
            const response = await author.updateAuthor(modifiedAuthor);
            res.status(201).json({
                items_updated: response,
                data: modifiedAuthor, 
            });
            console.log(`se ha modificado la author ${modifiedAuthor.email}`)
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

// DELETE http://localhost:3000/api/authors?email=email@correo.es --> por email
const deleteAuthor = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let authors;
    try {
        authors = await author.deleteAuthor(req.query.email);
        res.status(200).json({"exito" : `Se ha borrado el autor: "${req.query.email}"`}); 
    } catch {
        res.status(500).json({ "error": "error en la BBDD" }); 
    }
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor, //--> DELETE
    updateAuthor//--> PUT
}

//createAuthor
// POST http://localhost:3000/api/authors
// let newAuthor = { 
//     name: "cabesaguevo",
//     surname: "lomismo",
//     email: "hander@thebridgeschool.es",
//     image: "foto"
// }