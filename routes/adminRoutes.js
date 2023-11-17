const express = require('express')
const router = express.Router()
// const pool = require('../database/db')
const handler = require('../database/dbClientHandler')

//get all users
router.get('/users', async (req, res, next) => {
    const query = 'SELECT * FROM users'
    await handler(query, [], res, next)
})
//get all locations
router.get('/locations', async (req, res, next) => {
    const query = 'SELECT * FROM us_locations'
    await handler(query, [], res, next)
})
//get one user
router.get('/users/:id', async (req, res, next) => {
    const id = req.params.id
    const query = 'SELECT * FROM users WHERE user_id = $1'
    await handler(query, [id], res, next)
})
//get one location
router.get('/locations/:id', async (req, res) => {
    res.send('hi')
})
//create one user
router.post('/users', async (req, res) => {
    res.send('hi')
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