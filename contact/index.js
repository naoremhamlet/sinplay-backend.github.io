const Contact = require('express').Router();
const Customer = require("./Customer")


Contact.post('/api/recieve_message', Customer);

exports.Contact = Contact;