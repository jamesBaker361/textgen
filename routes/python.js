var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn,
    py    = spawn('python', ['python/basic.py']);

router.get('/', function(req, res, next) {
  res.render('python', {tweets:[]});
  //py.stdin.write(JSON.stringify([1,2,3]));
//py.stdin.end();
});

router.post('/',function(req,res,next){
	py.stdin.write(req.body.query);
	py.stdin.write(req.body.quant);
	py.stdin.write('{"normal":420}');
	py.stdin.end();
	var tweets=[];
	py.stdout.on('data', function(data){
  		tweets.push(data.toString());
	});
	py.stdout.on('end', function(){
		console.log(tweets);
  		res.render('python', {tweets:tweets});
  		py    = spawn('python', ['python/basic.py']);
	});
});

module.exports = router;
