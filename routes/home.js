const express = require('express');
const router = express.Router();
const elements = require('../public/assets/js/elements');

router.get('/', function (req, res, next) {
  res.render('home', { layout: false, elements: elements });
});

module.exports = router;
