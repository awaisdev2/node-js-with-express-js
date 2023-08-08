const express = require('express')
const app = express()
app.get('/home', (req,resp)=>{
    resp.send("<h1> Welcome to my home page </h1>" + "<a href='/about'>Go to about page</a>")
})
app.get('/about', (req,resp)=>{
    resp.send("<h1> Welcome to my about page </h1>" + "<a href='/help'>Go to help page</a>")
})
app.get('/help', (req,resp)=>{
    resp.send([
        {
            name: 'awais',
            id: '1',
            gender: 'male',
            age: '17'
        },
        {
            name: 'john',
            id: 2,
            gender: 'male',
            age: '25'
        }
    ])
})
app.listen(4500)