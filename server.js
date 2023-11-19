//modules
const express = require('express')
const pool = require('./database/db')
const cors = require('cors')

const app = express()

//import routes
const adminRoutes = require('./routes/adminRoutes')

//middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//routes
app.use('/api/admin', adminRoutes)

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.type('text/plain').status(err.status || 500).send(err.message)
})

//port listener
app.listen(1337, () => {
    console.log(`Listening on 1337`)
})