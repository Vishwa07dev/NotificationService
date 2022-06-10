/**
 *? Controller for the notifications request
 */

const Notification = require('../models/notification.model');

/**
 *! 1. Accept a new notification request and return the payment id.
 */

exports.acceptNotificationRequest = async (req, res) => {
    //? Read from request body
    const notificationObj = {
        subject: req.body.subject,
        recipientEmail: req.body.recipientEmail,
        paymentId: req.body.paymentId,
        content: req.body.content
    }

  /**
  * ! 2. Check the notification status (if email is sent or not) Using the
  * ! payment id
  */

    try {
       const notification = await Notification.create(notificationObj);

       return res.status(201).send({
           notificationId: notification._id,
           status: "Accepted Request - it's in progress"
        });
    } catch(err) {
        console.log(err.message);
        return res.status(500).send({message: "Something went wrong at backend"});
    }  
}

/**
 * Check the notification status (if email is sent or not) using the
 * tracking id
 */

exports.getNotificationStatus = async (req, res) => {
    const notificationId = req.params.id;

    try {
        const notification = await Notification.find({
            _id: notificationId
        });

        return res.status(200).send({
            requestId: notification._id,
            sentStatus: notification.sentStatus
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal error while fetching the notification request"
        });
        
    }
}