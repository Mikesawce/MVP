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
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = `INSERT INTO users(name, email, username, password)
        VALUES($1, $2, $3, $4) RETURNING user_id`
    await handlers.postOne(query, newItem, keys, params, res, next)
})
//create one location
router.post('/locations', async (req, res, next) => {
    const newItem = req.body
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = `INSERT INTO us_locations(name, city, state, zipcode)
        VALUES($1, $2, $3, $4) RETURNING location_id`
    await handlers.postOne(query, newItem, keys, params, res, next)
})
//edit one user
router.patch('/users/:id', async (req, res, next) => {
    const id = req.params.id
    const newItem = req.body
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = 'SELECT * FROM users WHERE user_id = $1'
    const query2 = `UPDATE users SET name = $1, email = $2, username = $3,
        password = $4 WHERE user_id = $5`
    await handlers.editOne(query, query2, id, newItem, keys, params, res, next)
})
//edit one location
router.patch('/locations/:id', async (req, res, next) => {
    const id = req.params.id
    const newItem = req.body
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = 'SELECT * FROM us_locations WHERE location_id = $1'
    const query2 = `UPDATE us_locations SET name = $1, city = $2, state = $3,
        zipcode = $4 WHERE location_id = $5`
    await handlers.editOne(query, query2, id, newItem, keys, params, res, next)
})
//delete one user
router.delete('/users/:id',async (req, res, next) => {
    const id = req.params.id
    const newItem = req.body
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = 'SELECT * FROM users WHERE user_id = $1'
    const query2 = 'DELETE FROM users WHERE user_id = $1'
    await handlers.deleteOne(query, query2, id, newItem, keys, res, next)
})
//delete one location
router.delete('/locations/:id', async (req, res, next) => {
    const id = req.params.id
    const newItem = req.body
    const keys = Object.keys(newItem)
    const params = keys.map(key => newItem[key])
    const query = 'SELECT * FROM us_locations WHERE location_id = $1'
    const query2 = 'DELETE FROM us_locations WHERE location_id = $1'
    await handlers.deleteOne(query, query2, id, newItem, keys, res, next)
})

module.exports = router