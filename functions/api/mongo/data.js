const express = require('express');
const Person = require('./models/Person');

const app = express();

app.get("/", (req, res) => {
    Member.find().then(results => {
        results.length > 0 ? res.json(results): res.sendStatus(400)
    })
});

module.exports = app;