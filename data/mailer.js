const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env')});
const nodemailer = require('nodemailer');
const nodeMailerPass = process.env.NODEMAILER_PASS;
const nodeMailerUser = process.env.NODEMAILER_USER;
const moment = require('moment');
const pug = require('pug');
const contactSubmit = pug.compileFile(process.cwd() + '/email-templates/contact.pug');

function sendContactForm (req, res, next) {
    const { name, email, phone, interest, message } = req.body;
    console.log(req.body)
    const date = moment().format('MMM Do YYYY');
    const mailOptions = {
        from: nodeMailerUser, 
        to: `${email}, ${nodeMailerUser}`,
        subject: 'We have received your enquiry', 
        replyTo: email,
        html: contactSubmit({name: name, phone: phone, interest: interest, message: message, date: date, email: email})
    };
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secureConnection: true,
        auth: {
            user: nodeMailerUser,
            pass: nodeMailerPass
        },
        tls: { ciphers: 'SSLv3' }
    });
    transporter.sendMail(mailOptions)
    .then((email) => {
        console.log('here',email)
        if (email.rejected.length > 0) throw {status: 404, message: 'Rejected'};         
        return res.status(201).send({success: true, msg: 'Enquiry submitted'});       
    })
    .catch((err) => {
        console.log('err1', err)
        if (err.status === 404) return next(err);
        else return next({status: 500, message: 'server error'});
    });
}

module.exports = {
    sendContactForm
};
