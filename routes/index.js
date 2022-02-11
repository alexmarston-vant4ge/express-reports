var express = require('express');
var router = express.Router();
var myFunc = require('puppeteer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', puppeteer: myFunc });
});

module.exports = router;
