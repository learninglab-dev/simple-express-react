var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/react', function(req, res, next) {
  res.sendFile(path.join(__basedir, 'client/build/index.html'));
});

module.exports = router;
