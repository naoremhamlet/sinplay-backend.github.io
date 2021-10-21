const express = require('express')
const bodyParser = require('body-parser')

const { conn } = require('./connection')
const Customer = require('./src/Customer')

const PORT = process.env.PORT || 8000;
const app = express()
app.use(bodyParser.json());
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.on('ready', () => {
  app.get('/', (req, res, next) =>{
    res.send("Running");
  })
    Customer(app, conn, urlencodedParser)
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
  app.emit('ready')
})