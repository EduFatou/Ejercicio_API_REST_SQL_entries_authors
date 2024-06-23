const { Pool } = require('pg');

require('dotenv').config()

// PARA USAR EN LOCAL CON DOCKER
// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
// });

// PARA USAR CON RENDER
const pool = new Pool({
    host: 'dpg-cprhqvdumphs73c615n0-a.frankfurt-postgres.render.com',
    user: 'edu_hc2f_user',
    port: '5432',
    database: 'edu_hc2f',
    password: 'U1gvLe9UnuO1ll1wnZvnMJZMQCIEFSFe',
    ssl: {
      rejectUnauthorized: false
    }
  });



// PARA USAR CON DOTENV
//   const pool = new Pool({ 
//     user: process.env.PG_USER, 
//     host: process.env.PG_HOST, 
//     database: process.env.PG_DATABASE, 
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT
// })

module.exports = pool;