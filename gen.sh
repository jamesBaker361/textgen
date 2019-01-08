echo var $1Router\=require\(\'./routes/$1\'\)\;
echo app.use\(\'\/$1\', $1Router\)\;
echo "extends layout" >> ./views/$1.jade
echo "var express = require('express');" >> ./routes/$1.js
echo "var router = express.Router();" >> ./routes/$1.js
echo "router.get('/', function(req, res, next) {" >> ./routes/$1.js
echo "res.render('$1', {});" >> ./routes/$1.js
echo "});" >> ./routes/$1.js
echo "module.exports = router;" >> ./routes/$1.js