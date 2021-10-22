const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { conn } = require('./connection')
const Customer = require('./src/Customer')
const Meeting = require('./src/Meeting')

const PORT = process.env.PORT || 8000;
const app = express()

app.use(cors())

app.use(bodyParser.json());
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.on('ready', () => {
  app.get('/', (req, res, next) =>{
    res.send("Running");
  })
    Customer(app, conn, urlencodedParser)
    Meeting(app, conn, urlencodedParser)
})

app.listen(PORT, () => {
  console.log(`Server Running`)
  app.emit('ready')
})