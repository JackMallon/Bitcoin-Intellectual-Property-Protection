var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Bit Protect',     
    data: {},
    errors: {},
    hash: null });
});

module.exports = router;
