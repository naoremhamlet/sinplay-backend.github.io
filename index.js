const express = require('express')
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser')
app.use(cors());

const PORT = process.env.PORT || 8000;

const {conn} = require('./connection')
const { Contact } = require('./api');

//midleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(Contact);

app.get('/', (req, res, next) => res.send("sinplay-backend Running"));

app.listen(PORT,e=>console.log('server start'))