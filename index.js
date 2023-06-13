const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('hello SV')
    res.send('Hello , SV')
})
app.listen(3000,()=>{
    console.log('sv')
})