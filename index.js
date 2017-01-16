'use strict';

const PORT = process.env.PORT || 8080;

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const passport = require('passport')  

const mongoose = require('mongoose');

mongoose.connect('mongodb://mikita_siadykh:3588701-Sad@ds133348.mlab.com:33348/heroku_x4cvh20w');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  resave: true,
  secret: 'verySecretKey',
  saveUninitialized: false
}))
.use(passport.initialize())
.use(passport.session())

app.use('/api', require('./app/routes'));

app.listen(PORT);

//