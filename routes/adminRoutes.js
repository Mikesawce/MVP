const express = require('express')
const router = express.Router()
const pool = require('../database/db')
const handlers = require('../database/handlers')

//following routes are for testing/administrative purpose

//get all users
router.get('/users', async (req, res, next) => {
    const query = 'SELECT * FROM users;'
    await handlers.getAll(query, res, next)
})
//get all locations
router.get('/locations', async (req, res, next) => {
    const query = 'SELECT * FROM us_locations'
    await handlers.getAll(query, res, next)
})
//get one user
router.get('/users/:id', async (req, res, next) => {
    const id = req.params.id
    const query = 'SELECT * FROM users WHERE user_id = $1'
    await handlers.getOne(query, [id], res, next)
})
//get one location
router.get('/locations/:id', async (req, res, next) => {
    const id = req.params.id
    const query = 'SELECT * FROM us_locations WHERE location_id = $1'
    await handlers.getOne(query, [id], res, next)
})
//create one user
router.post('/users', async (req, res, next) => {
    const newItem = req.body
    const keys = Object.keys(req.body)
    const params = keys.map(key => newItem[key])
    const query = `INSERT INTO users(name, email, username, password)
        VALUES($1, $2, $3, $4) RETURNING user_id`
    await handlers.postOne(query, newItem, keys, params, res, next)
})
//create one location
router.post('/locations', async (req, res) => {
    res.send('hi')
})
//edit one user
router.patch('/users/:id', async (req, res) => {
    res.send('hi')
})
//edit one location
router.patch('/locations/:id', async (req, res) => {
    res.send('hi')
})
//delete one user
router.delete('/users/:id',async (req, res) => {
    res.send('hi')
})
//delete one location
router.delete('/locations/:id', async (req, res) => {
    res.send('hi')
})

module.exports = router