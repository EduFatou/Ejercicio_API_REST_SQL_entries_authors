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



//DOTENV
//   const pool = new Pool({ 
//     user: process.env.PG_USER, 
//     host: process.env.PG_HOST, 
//     database: process.env.PG_DATABASE, 
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT
// })

module.exports = pool;