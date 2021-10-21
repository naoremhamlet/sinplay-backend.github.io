const express = require('express') 
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser')

app.use(cors());

const {conn} = require('./connection')
const { Contact } = require('./Contact');

const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))



conn.connect((err)=>{
    if(!err)
    {
        app.use(Contact);
        app.get('/', (req, res, next)=>{
            res.send('Running');
        })
    }
    else
    {
        console.log('Not connected ',err);
    }
});


app.listen(PORT,e=>console.log('server start at ' + PORT))