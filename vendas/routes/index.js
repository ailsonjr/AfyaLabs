var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loja', function (req, res, next) {
  res.render('loja');
});

router.get('/sobre', function (req, res, next) {
  res.render('sobre');
});

router.get('/produtos', function (req, res, next) {
  res.render('produtos');
});

module.exports = router;
