var express = require('express');
var router = express.Router();

/**
 * Home Page Route
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'NODE JS Todo API' });
});

module.exports = router;