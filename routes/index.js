var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});
router.post('/submit',function(req,res){
  console.log(req.body)
  res.render('certificate',{ fname:req.body.first_name,lname:req.body.last_name,course:req.body.course});
  console.log(req.body.first_name)
})
module.exports = router;
