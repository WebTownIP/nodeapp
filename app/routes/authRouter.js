'use strict';

const isAuthenticated = require('../services/authService.js').isAuthenticated;

module.exports = (router, passport) => {

  router.post('/login', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        res.statusCode = 500;
        return res.end();
      }

      if (!user) {
        res.statusCode = 400;
        return res.json({'err': 'Wrong username or password'});
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }

        res.statusCode = 200;
        return res.json({email: user.email});
      });
    })(req, res, next);
  });

  router.post('/signup', (req, res, next) => {
    passport.authenticate('signup', (err, isSuccess, info) => {
      if (err) {
        res.statusCode = 500;
        return res.end();
      }

      if (!isSuccess) {
        res.statusCode = 400;
        return res.json(info);
      }

      res.statusCode = 200;
      return res.end()
    })(req, res, next);
  });

  router.get('/signout', isAuthenticated, function(req, res) {
    req.logout();
    res.sendStatus = 200;
    res.end();
  });

};
