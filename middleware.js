const express = require('express')
const app = express()
const route = express.Router()

const reqFilter = (req,res,next) =>{
   if(!req.query.age){
    res.send('Age is required')
   }
   else if(req.query.age<18){
    res.send('User must be 18 years old or older than 18 years')
   }
   else{
    next()
   }
}
// app.use(reqFilter)
route.use(reqFilter)
route.get('', (req, res)=>{
    res.send(req.query)
})
route.get('/about', (req, res)=>{
    res.send(req.query)
})
route.get('/help', (_, res)=>{
    res.send("hello help")
})
app.use('/', route)

app.listen(4500)