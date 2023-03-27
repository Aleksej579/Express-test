var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
//   res.send('TEST');
    res.render('about', { title: 'About' });
});

module.exports = router;