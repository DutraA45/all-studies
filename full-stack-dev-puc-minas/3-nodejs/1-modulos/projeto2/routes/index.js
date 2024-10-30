var express = require('express');
var router = express.Router();

/* GET home page. */
// Com a view engine configurada, é possivel usar o res.render ao invés de res.send
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
