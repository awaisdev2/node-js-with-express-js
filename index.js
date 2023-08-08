const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

app.get('', (req,resp)=>{
    resp.get([
        {
            name: 'awais',
            age: 17,
            gender: 'male',
            id: 1,
            email: 'awais@dev.com'
        },
        {
            name: 'John',
            age: 25,
            gender: 'male',
            id: 2,
            email: 'John@dev.com'
        },
        {
            name: 'Alexa',
            age: 20,
            gender: 'female',
            id: 3,
            email: 'Alexa@dev.com'
        }
    ])
})
app.use(express.static(publicPath))
app.listen(4500)