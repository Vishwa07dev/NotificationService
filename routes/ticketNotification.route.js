/**
 * This will contain the route for the ticket notification request.
 */

const notificationController = require("../controllers/notificationController");

module.exports = (app) => {

    app.post("/notifServ/api/v1/notifications", notificationController.acceptNotificationRequest);
    app.get("/notifServ/api/v1/notifications/:id", notificationController.getNotificationStatus);
}