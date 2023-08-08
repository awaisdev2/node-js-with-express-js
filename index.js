const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
const publicPath = path.join(__dirname, 'public')
const users = [
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
]
app.set('view engine','ejs');
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
);
app.use(bodyParser.json());

app.get('/users', (req,resp)=>{
    resp.send({users})
})

app.get('/profile',(_,resp)=>{
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA'
    }
   resp.render('profile',{user})
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(!username) {
       return res.status(400).send('Username is required!');
    }

    if(!password) {
        return res.status(400).send('Passwords is required!');
     }
    res.send({username, password});
})
app.get('/index',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/contact',(_,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`)
})
// app.use(express.static(publicPath))
app.listen(4500)