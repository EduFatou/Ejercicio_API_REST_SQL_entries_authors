const { Pool } = require('pg');

require('dotenv').config()

//DOCKER
// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
// });

//RENDER
// const pool = new Pool({
//     host: 'dpg-cprhqvdumphs73c615n0-a.frankfurt-postgres.render.com',
//     user: 'edu_hc2f_user',
//     port: '5432',
//     database: 'edu_hc2f',
//     password: 'U1gvLe9UnuO1ll1wnZvnMJZMQCIEFSFe',
//     ssl: {
//       rejectUnauthorized: false
//     }
//   });



//DOTENV
  const pool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
    rejectUnauthorized: false
    }
})

module.exports = pool;