const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET /index');
    // res.sendFile(__dirname + '/../index.html')
    res.send('index')
})

router.get('/style', (req, res) => {
    console.log('GET /index/style');
    res.send('font-weight: bold')
})

module.exports = router