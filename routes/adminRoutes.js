const express = require('express')
const router = express.Router()

//get all users
router.get('/users', async (req, res) => {
    res.send('hi again')
})
//get all locations
router.get('/locations', async (req, res) => {
    res.send('locations!')
})
//get one user
router.get('/users/:id', async (req, res) => {
    res.send('hi')
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