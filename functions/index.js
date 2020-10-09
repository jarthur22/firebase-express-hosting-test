const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();


app.get("/auth", (request, response) => {
    response.send("Auth called");
});

app.get('/data', (request, response) => {
    response.send('Database call')
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
