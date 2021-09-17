var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/api/getTest', async (req, res) => {
  try {
    res.send({
      msg: 'This my response : get'
    })
  } catch (err) {
    console.log(err);
    res.send({
      error: 'Can"t read api data',
    });
  }
});

router.post('/api/postTest', async (req, res) => {
  try {
    console.log(req.body)
    res.send({
      msg: 'Hi!' + req.body.name
    })
  } catch (err) {
    console.log(err);
    res.send({
      error: 'Can"t read api data',
    });
  }
});

module.exports = router;