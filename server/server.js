const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { Pool } = require('pg')

dotenv.config()
const app = express()

//env variables
const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT

const pool = new Pool({
    connectionString: dbString
})

//middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hi')
})

const port = 1337
app.listen(port, () => {
    console.log(`You are now tuned into port ${port}.`)
})