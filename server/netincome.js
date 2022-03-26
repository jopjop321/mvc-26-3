var express = require('express');
var router = express.Router();
const tax = require('../model/netincome')

router.get('/', function(req, res, next) {
  var data = {
      "income" : Number(req.param('income')),
      "months" : Number(req.param('months')),
      "cryptoincome" : Number(req.param('cryptoincome')),
      "socialsecurity" : Number(req.param('socialsecurity')),
      "lifeinsurance" : Number(req.param('lifeinsurance')),
      "healthinsurance" : Number(req.param('healthinsurance')),
      "rmf" : Number(req.param('rmf')),
      "ssf" : Number(req.param('ssf')),
      "pvd" : Number(req.param('pvd'))
  }
  var netincome = tax(data);
  res.send('รายได้สุทธิ:'+netincome);
});
// router.get('/', function(req, res, next) {
//   var fname = req.param('fname');
//   var lname = req.param('lname');
//   res.send('Name:' + fname + ' : ' + lname);
// });

module.exports = router;