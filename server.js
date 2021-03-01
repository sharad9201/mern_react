require('./db/mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const itemRouter = require('./routes/api/items')
const app = express()

app.use(bodyParser.json())

app.use('/api/items', itemRouter) 
// app.get('/items',(req,res)=>{
// res.send('hello')
// })
app.listen(5000)