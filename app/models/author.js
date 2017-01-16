'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    username: {
      type: String,
      required: true,
      min: [3, 'Username should >=3'],
      index: { unique: true }
    },
    password: {
      type: String,
      required: true,
      min: [6, 'Password should >=6'],
      validate: {
        validator: (v) => {
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]*$/.test(v);
        },
        message: 'Password is not strong.'
      }
    },
    email: {
      type: String,
      index: {
        unique: true
      }
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('Author', AuthorSchema);
