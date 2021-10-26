const express = require('express')
const cors = require('cors');
const app = express();

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views','./views');


const PORT = process.env.PORT || 8000;

const {conn} = require('./connection')
const { Contact } = require('./api');
const { Admin } = require('./admin');


//midleware

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' }))
app.use(express.static('public'));

app.use(Contact);
app.use(Admin);

//know whether runnning or not
app.get('/', (req, res, next) => res.send("sinplay-backend Running"));

app.listen(PORT,e=>console.log('server start'))
