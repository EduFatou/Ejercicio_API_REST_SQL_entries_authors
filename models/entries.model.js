//const {Pool} = require('pg');
const pool = require('../config/db_pgsql');
const queries = require('../queries/entries.queries') // Queries SQL

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
//   });

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        console.log(`Intentando eliminar la entrada con título: ${title}`);
        const data = await client.query(queries.deleteEntry, [title]);
        console.log(`Resultado de la eliminación: ${data.rowCount}`);
        result = data.rowCount;
    } catch (err) {
        console.error(`Error al eliminar la entrada: ${err.message}`);
        throw err;
    } finally {
        client.release();
    }
    return result;
}


//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, email, category, old_title } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry,[
            title,
            content,
            date,
            email,
            category,
            old_title
        ]);
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}

module.exports = entries;


// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data)) */


/*
getAllEntries()
.then(data=>console.log(data))
*/



//  let newEntry = {
//     title: "Se acabaron las mandarinas de TB",
//     content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
//     email: "guillermu@thebridgeschool.es",
//     category: "sucesos"
// }

// createEntry(newEntry)
//     .then(data => console.log(data)) 

// const updatedEntry = {
//     title: "Se acabaron las tortillas del Markina",
//     content: "Estaban demasiado muy buenas y se las han comido todas",
//     date:"2024-06-17",
//     email: "guillermu@thebridgeschool.es",
//     category: "Sucesos",
//     old_title:"Se acabaron las mandarinas de TB"
// }


// updateEntry(updatedEntry)
//     .then(data => console.log(data))

// deleteEntry('Estamos de Lunes de Back 2')