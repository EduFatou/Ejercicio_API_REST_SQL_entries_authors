const express = require("express");
const app = express(); //inicializa servidor
const port = 3000;

// //importar middlewares
// const error404 = require("./middlewares/error404.js");
// const morgan = require("./middlewares/morgan.js");

// // Logger
// app.use(morgan(':method :host :url :status :param[id] - :response-time ms :body'));

// Rutas
// const booksRoutes = require("./routes/books.routes.js")
// const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

app.get("/", (req, res) => {
    res.send("Hello World! lets go for coffee!!");
});

// Rutas
//API
// app.use('/api/books',booksRoutes);
// app.use('/api/products',productsRoutes);
app.use('/api/entries',entriesRoutes);

// app.use(error404); //middleware gestiona error 404


// app.get("/perros/:age/:name?", (req, res) => {
//     const name = req.params.name;
//     console.log(req.params);
//     const perros = [
//         { name: "perro1", age: 2 },
//         { name: "perro2", age: 3 },
//         { name: "perro3", age: 5 },
//         { name: "perro4", age: 3 },
//     ];
//     if (name) { //devuelve un perro
//         const perro_encontrado = perros.find((perro) => perro.name === name);
//         perro_encontrado ?
//             res.status(200).json(perro_encontrado)
//             : res.status(404).json({}); // si no encuentra el perro devuelve objeto vacío

//     } else {
//         res.status(200).json(perros); //devuelve todos los perros
//     }

// });

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});