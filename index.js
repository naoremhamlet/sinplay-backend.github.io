const express = require('express') 
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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