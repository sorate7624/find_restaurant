var express = require('express');
var router = express.Router();
var signup = require('../signup.json');

router.get('/', function (req, res) {
  res.send(signup)
});

// 영화 상세 페이지를 위한 코드
router.get('/signup', function (req, res) {
  var id = parseInt(req.params.id, 10)
  var signup = signup.filter(function (movie) {
    return movie.id === id
  });
  res.send(signup)
});
module.exports = router;