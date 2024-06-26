const { Pool } = require('pg');
const pool = require('../config/db_pgsql')
const queries = require('../queries/authors.queries') // Queries SQL

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
// });

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//GET

const getAuthorByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorByEmail, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//POST
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateAuthor = async (author) => {
    const { name, surname, email, image, old_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir la conexión
        const data = await client.query(queries.updateAuthor, [
            name,
            surname,
            email,
            image,
            old_email
        ]);
        result = data.rowCount;
    } catch (err) {
        console.error('Error al actualizar el autor:', err);
        throw err;
    } finally {
        if (client) client.release();
    }
    return result;
}

const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[email])
        result = data
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// Pruebas
/* getAuthorByEmail('alejandru@thebridgeschool.es')
    .then(data=>console.log(data))  */



/*let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) 
    
/*let updateEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    date: '2024-6-17',
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
    old_title: "El titulo antiguo a cambiar"
}   */

    

// let newAuthor = { 
    // name: "cabesaguevo",
    // surname: "cabesaguevo",
    // email: "cabesaguevo@thebridgeschool.es",
    // image: 
// }
// updateAuthor(newAuthor)
//     .then(data=> console.log(data))

//deleteAuthor("muchelle@thebridgeschool.es").then(data => console.log(data));

const authors= {
    getAllAuthors,
    getAuthorByEmail,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;