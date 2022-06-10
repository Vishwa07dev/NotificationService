/**
 * ! We will take help of node-cron to repeat some lines of code at regular interval
 * 
 */

const cron = require("node-cron");
const Notification = require("../models/notification.model");
const constants = require("../utils/constants");
const emailTransporter = require("../notifier/emailService");

// var count = 0;
// cron.schedule('*/2 * * * * *', () => {   
//     console.log("Hello from cron", ++count);
// });

/**
 * ! I need to send emails
 * 
 * ! 1. Get the list of all the notifications to be sent
 * ! 2. Send email for each notification
 * 
 */

cron.schedule('*/30 * * * * *', async () => {

    console.log(`Cron started...`);
    
    const notifications = await Notification.find({
        sentStatus: constants.sentStatuses.unsent
    });

    notifications.forEach(notification => {
        const mailData = {
            from: 'movie-booking-notification-service@gmail.com',
            to: notifications.recipientEmail,
            subject: notification.subject,
            text: notification.content,
        };

        emailTransporter.sendEmail(mailData, async(err, info) => {
            if(err) {
                console.log(`Uncaught error: ${err.message}`);
            } else {
                //Update the status of the notification
                const savedNotification = await Notification.findOne({ 
                    _id: notification._id
                });
                savedNotification.sentStatus = constants.sentStatuses.sent;

                await savedNotification.save();
            }
        });

    });
});




