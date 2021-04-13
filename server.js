const express = require('express')
const app = express()
const port = 1337

const index = require('./routes/index.js')

app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Yes working')
})

app.get('/secret', (req, res) => {
    console.log('GET /secret');
    res.send('Yes secret route working!')
})

app.use('/index', index)


app.listen(port, () => {
    console.log('Server is listening on port' + port);
})