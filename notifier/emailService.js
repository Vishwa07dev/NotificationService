const nodemailer = require('nodemailer');

/**
 *? I need to setup the nodemailer for send the emails
 *? SMTP host details
 *? credentials if needed
 */

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "dev.udayteja@gmail.com",
        pass: "uday@facebook.com"
    },
    secure: true
});

/**
 * ! Transporter will be used to send the emails
 */

//! Testing
// const mailDataObj = {
    
//     from: "udayteja@facebook.com",
//     to: "dev.udayteja@gmail.com",
//     subject: "Test Mail",
//     text: "This is test mail"

// }

// transporter.sendMail((mailDataObj), (err, info) => {
//     if(err) {
//         console.log(err);
//         return;
//     } console.log(info);
// });

