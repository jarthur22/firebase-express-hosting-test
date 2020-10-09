const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const vars = require("./env_vars.json");
const auth = require('./api/auth');
const data = require('./api/mongo/data');

const app = express();
app.use(cors());

//use routes
app.use('/auth', auth);
app.use('/data', data);

//connect Mongo
var dbAuth = vars.database;
const mongoURI = `mongodb+srv://${dbAuth.username}:${dbAuth.password}@cluster0.ulqar.mongodb.net/${dbAuth.db}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

exports.api = functions.https.onRequest(app);
