const express = require('express')
const connection = require('./config')
const app = express()

app.get('/', (_, resp)=>{
   connection.query("Select * from user" ,(err,result)=>{
    if(err){
        resp.send("Something went wrong")
    }
    else{
        resp.send(result)
    }
   })
})

app.listen(4500) 