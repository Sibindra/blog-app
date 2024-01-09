require('dotenv').config()
const PORT = process.env.PORT || 8000

const express = require('express')
const app = express()


app.get('/' , (req , res) =>{
    return res.send('working')
})

app.listen(PORT , () => console.log('Server: ' , PORT))