const port = 3003

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(cors({origin: '*'}));
server.set('secret', 'opensecret');

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`);    
})

module.exports = server