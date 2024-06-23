const express = require("express");
const app = express(); //inicializa servidor
const port = 3000;

//importar middlewares
const error404 = require("./middlewares/error404.js");
const morgan = require("./middlewares/morgan.js");
const checkApiKey = require("./middlewares/auth_api_key");
// Logger
app.use(morgan(':method :host :url :status :param[id] - :response-time ms :body'));

// Rutas
const authorsRoutes = require("./routes/authors.routes")
const entriesRoutes = require("./routes/entries.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World! lets go for coffee!!");
});

// Rutas
//API
app.use('/api/authors', checkApiKey, authorsRoutes);
app.use('/api/entries', checkApiKey, entriesRoutes);
app.use(error404); //middleware gestiona error 404

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});