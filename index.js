const express = require('express') 

const app = express();

var bodyParser = require('body-parser')


const {conn} = require('./connection')
const { Contact } = require('./Contact');

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(Contact);


conn.connect((err)=>{
    if(!err)
    {
        console.log('connected');
    }
    else
    {
        console.log('Not connected ',err);
    }
});


app.listen(PORT,e=>console.log('server start at ' + PORT))