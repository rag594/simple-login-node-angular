var express = require('express');
var user = require('../models/userDetails');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (req,res,next) {
  user.verify(req.body, function (err,user) {
    if(err) {
      res.json({msg:err});
    } else {
      delete user.password;
      req.session.user = user;
      //console.log(req.session.user.message);
      res.json({user:req.session.user});
    }
  });
});

router.post('/logout', function (req,res) {
  console.log(req.session);
  req.session = {};
    res.json({msg:req.session});

});

module.exports = router;
