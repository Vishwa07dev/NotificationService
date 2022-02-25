const notificationController = require('../controllers/ticketNotification.controller');
//const { authJwt, verifyTicketRequestBody } = require("../middlewares");

module.exports = function (app) {

    app.post("/notifiServ/api/v1/notifications", notificationController.acceptNotificationRequest);
    app.get("/notifiServ/api/v1/notifications/:id", notificationController.getNotificationStatus);

}