var express = require('express');
var router = express.Router();

/* GET choose page. */
router.get('/', function(req, res, next) {
  res.render('randomitem', { title: 'Random Item' });
});

module.exports = router;