const express = require('express')
const router = express.Router()
const pool = require('../database/db')
const handlers = require('../database/handlers')

//user sign in
router.post('/login', async (req, res, next) => {
    const params = [req.body.username, req.body.password]
    const query = 'SELECT username FROM users WHERE username = $1'
    const query2 = 'SELECT password FROM users WHERE password = $1'
    await handlers.logIn(query, query2, params, res, next)
})

module.exports = router