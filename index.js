const express = require('express')
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8000;

const {conn} = require('./connection')
const { Contact } = require('./api');


//midleware

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(Contact);

//know whether runnning or not
app.get('/', (req, res, next) => res.send("sinplay-backend Running"));

app.listen(PORT,e=>console.log('server start'))
