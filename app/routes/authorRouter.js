'use strict';

const restify = require('express-restify-mongoose');
const Author = require('../models/author');

module.exports = (router) => {
  return restify.serve(router, Author, require('../config/restifyConf'));
}
