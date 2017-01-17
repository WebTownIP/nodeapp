'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    body: String,
    author: {
      email: String,
      _id: String
    },
    cratedAt: Date,
    updatedAt: Date
});

ArticleSchema.pre('save', function(next) {
  if (!this._id) {
    this.cratedAt = new Date();
  }
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Article', ArticleSchema);
