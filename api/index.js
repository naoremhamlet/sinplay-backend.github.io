const Contact = require('express').Router();
const Customer = require("./comp/Customer")
const Meeting = require("./comp/Meeting");
const Newsletter = require('./comp/Newsletter');

const { conn } = require("../connection");


Contact.post('/api/recieve_message', (req, res, next) => {
    Customer(req, res, next, conn);
});
Contact.post('/api/set_meeting', (req, res, next) => {
    Meeting(req, res, next, conn)
})
Contact.post('/api/subscribe_newsletter', (req, res, next) => {
    Newsletter(req, res, next, conn)
})

exports.Contact = Contact;