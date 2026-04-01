var express = require('express');
var router = express.Router();

/* GET tires page. */
router.get('/', function(req, res, next) {
  const results = [
    { tire_type: "All-Season", size: "215/55R17", cost: 120 },
    { tire_type: "Winter", size: "225/50R18", cost: 155 },
    { tire_type: "Performance", size: "245/40R19", cost: 210 }
  ];
  res.render('tires', { title: 'Search Results - Tires', results: results });
});

module.exports = router;