var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn,
    py    = spawn('python', ['python/basic.py']);

router.get('/', function(req, res, next) {
	res.render('marx', {content:'none'});
});

router.post('/', function(req, res, next) {
	res.render('marx', {content:'stooooopid'});
});

module.exports = router;