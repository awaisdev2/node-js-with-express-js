const mysql = require('mysql')

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
})

connect.connect((error)=>{
    if(error){
        console.log('error')
    }
    else{
        console.log('connected')
    }
})

connect.query('Select * from users', (_, result)=>{
    console.log('result', result)
})