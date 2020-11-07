var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
});

router.get('/', (req, res, next) => {
  res.render('add');
})

module.exports = router;