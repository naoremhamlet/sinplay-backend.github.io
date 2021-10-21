const nodemailer = require('nodemailer')

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path : path.join(__dirname,'../.env')
});

module.exports = function(reciever, msg){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.REACT_APP_EMAIL,
            pass: process.env.REACT_APP_EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.REACT_APP_EMAIL,
        to: reciever,
        subject: 'sinplay',
        text: msg
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) throw(err)
        else console.log(info.response)
    })
}