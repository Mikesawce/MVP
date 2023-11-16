const express = require('express')
const dotenv = require('dotenv')
const { Pool } = require('pg')

dotenv.config()

const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT

const pool = new Pool({
    connectionString: dbString
})

const app = express()

app.listen(PORT, () => {
    console.log(`You are now tuned into port ${PORT}.`)
})