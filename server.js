const express = require('express')
const pool = require('./database/db')

const app = express()

//import routes
const adminRoutes = require('./routes/adminRoutes')

// app.use(express.json())
// app.use(express.static('public'))

app.get('/', async (req, res) => {
    res.send('hi')
})

app.use('/admin', adminRoutes)

app.listen(1337, () => {
    console.log(`Listening on 1337`)
})