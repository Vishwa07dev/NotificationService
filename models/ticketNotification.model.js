const mongoose = require("mongoose");


const ticketNotificationSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    ticketId :{
        type : String,
        required :true
    },
    content: {
        type: String,
        required: true,
    },
    recepientEmails: {
        type: [String],
        required: true
        
    },
    sentStatus :{
        type: String,
        required: true,
        default: "UN_SENT"
    },
    requester :{
        type: String
        
    },
    createdAt: {
        // I want to default to a new date
        type: Date,
        immutable: true,  // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }  
},{
    //versionKey: false // this will remove the __v field, which indicates the internal revision of the document
})


module.exports = mongoose.model("TicketNotification", ticketNotificationSchema);