require('./crons/cron');
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));

/**
 * DB Connection initialization
 */


 mongoose.connect(dbConfig.DB_URL, () => {
    console.log("connected to Mongo DB ")
    
}, err => {
    console.log("Error :", err.mssage)
}
);


//Stiching the routes
require('./routes/ticketNotification.route')(app);

app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port num : ${serverConfig.PORT}`);
})