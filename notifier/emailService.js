const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: 'vish007dev@gmail.com',
        pass: 'Welcome@07',
    },
    secure: true,
});


/** 
const mailData = {
    from: 'crm-notification-service@gmail.com',
    to: 'kankvish@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
};


transporter.sendMail(mailData, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});


**/

//https://myaccount.google.com/lesssecureapps hit this link to allow your less secure app access gmail