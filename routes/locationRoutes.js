const express = require('express')
const router = express.Router()
const pool = require('../database/db')
const handlers = require('../database/handlers')

//get top viewed locations on page load
router.get('/', async (req, res, next) => {
    const query = 'SELECT * FROM us_locations ORDER BY views DESC LIMIT 4'
    await handlers.getAll(query, res, next)
})

module.exports = router