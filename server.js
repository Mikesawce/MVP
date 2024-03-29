//modules
const express = require('express')
const pool = require('./database/db')
const cors = require('cors')
const dotenv = require('dotenv')

const port = process.env.PORT || 1337

const app = express()

//import routes
const adminRoutes = require('./routes/adminRoutes')
const locationRoutes = require('./routes/locationRoutes')
const userRoutes = require('./routes/userRoutes')

//middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//routes
app.use('/api/users', userRoutes)
app.use('/api', locationRoutes)
app.use('/api/admin', adminRoutes)

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.type('text/plain').status(err.status || 500).send(err.message)
})

//port listener
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})