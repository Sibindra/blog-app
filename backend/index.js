require('dotenv').config()
const PORT = process.env.PORT || 8000

const express = require('express')
const app = express()

// DB
const connect = require('./lib/connect')
connect()




app.listen(PORT , () => console.log('Server: ' , PORT))