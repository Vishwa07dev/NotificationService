# Notification Service 
## _Sending notification emails asynchronoulsy_ 

This code base contains logic/structure  for sending the notfication email asynchronosly
## Features
* Cleint can request the Notification system to send notifications to all the recipeints
* Notfification Service will run a job every 30 seconds to gather all the requests for last 30 seconds and send notifications

  
More details around this can be found [here](https://docs.google.com/document/d/1x866VrSsjchFf7dhD7U2zYLbzj-tt34STWuDMMyL6Uc/edit?usp=sharing) 

## How is the code organized in this repo ?
The whole codebase is present in the single branch [main] 

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running
- Cron Expressions

## Tech
- Node.js
- Mongodb


## Installation

this app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd NotificationService
npm install
npm run devStart
```

## Rest endpoints
#### 1. Raise a new notification request 

```sh
POST /notifiServ/api/v1/notifications
Headers :
 Content-Type:application/json
Sample request body :
{
	"subject" : "Ticket with id [ id ] has been created",
	"content" : "Ticket has been created. User is having some issues",
	"recepientEmails" : "xyz@gmail.com, pqr@linkeddin.com",
	"requester" : "Vishwa Mohan",
	"ticketId" : "qqwe2314355521"
}

Sample response body :
{
    "requestId": "621893416ff4a6435445935b",
    "status": "Accepted Request"
}
```
--- 
#### 2. Get the notification request status

```sh
GET /notifiServ/api/v1/notifications/621893416ff4a6435445935b
Headers :
 Content-Type:application/json
 

Sample response body :
{
    "requestId": "621893416ff4a6435445935b",
    "subject": "Ticket with id [ id ] has been created",
    "content": "Ticket has been created. User is having some issues",
    "recepientEmails": [
        "xyz@gmail.com, xyz@linkeddin.com"
    ],
    "sentStatus": "SENT"
}
```


POSTMAN collection [link](https://www.getpostman.com/collections/8bf84203b31e343a8b63)

## Development

Want to improve? Great!
Make the changes and raise a PR. Reach out to me over kankvish@gmail.com
