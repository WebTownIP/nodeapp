'use strict';

const router = require('express').Router();
require('./authorRouter')(router);

router.get('/', function(req, res) {
    console.log(req.sessionID)
    res.json(req.sessionId);   
});

module.exports = router;
