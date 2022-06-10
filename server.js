/**
 * This file will have the logic to start the server
 */

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");

const app = express();

//! Register the body-parser middleware to express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//! Connect to the mongodb

mongoose.connect(dbConfig.DB_URL, () => {
    console.log(`Connecting to mongodb...`);
    console.log(`Connection Successful`);
}, err => {
    console.log(err, `Error while connecting to mongodb`);
});

/**
 * Switching the routes
 */
require("./routes/ticketNotification.route")(app);

/**
 * Require the cron file
 */
require("./crons/cron");

/**
 * Starting the server
 */
app.listen(serverConfig.PORT, () => {
    console.log(`Notification App listening on port ${serverConfig.PORT}`);
});





