'use strict';

const isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.sendStatus(401);
};

module.exports = {
  isAuthenticated
}