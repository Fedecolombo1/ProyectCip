var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/contacto', function(req, res, next) {
  res.render('contact');
});

router.get('/nosotros', function(req, res, next) {
  res.render('quienes');
});

router.get('/actividades', function(req, res, next) {
  res.render('actividades');
});

module.exports = router;
