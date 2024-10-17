require('dotenv').config()
const express = require('express')
const app = express()
const port =4000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/prince',(req,res)=>{
    res.send(`hello prince`)
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>you are a brand</h2>")
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})