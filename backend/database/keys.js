import { Pool } from "pg";

const pool = new Pool({
    host: 'batyr.db.elephantsql.com',
    port: '5432',
    user: 'dqorchfx',
    password: 'bnnFT1H_58Gn_JXCC5okPUUIVupU_e4l',
    database: 'dqorchfx'
})


// import { Pool } from "pg"; 
// require('dotenv').config(); 

// const pool = new Pool({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,

// })

module.exports = pool;
