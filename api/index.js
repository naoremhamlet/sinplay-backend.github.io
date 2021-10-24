const Contact = require('express').Router();
const Customer = require("./comp/Customer")
const Meeting = require("./comp/Meeting");

const { conn } = require("../connection");


Contact.post('/api/recieve_message', (req, res, next) => {
    Customer(req, res, next, conn);
});
Contact.post('/api/set_meeting', (req, res, next) => {
    Meeting(req, res, next, conn)
})

exports.Contact = Contact;