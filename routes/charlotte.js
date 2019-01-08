var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('charlotte', {});
});

router.post('/', function(req, res, next) {
	res.render('marx', {content:'stooooopid'});
});

module.exports = router;
