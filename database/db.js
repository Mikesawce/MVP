const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const dbString = process.env.DATABASE_URL
const port = process.env.PORT || 1337

const pool = new Pool({
    connectionString: dbString,
    port: port
})

module.exports = pool