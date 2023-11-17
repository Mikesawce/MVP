const express = require('express')
const router = express.Router()

router.get('/users', async (req, res) => {
    res.send('hi again')
})

module.exports = router