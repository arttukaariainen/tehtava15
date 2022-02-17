var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("kukkuluuruu")
});

router.use (function (request,response,next) {
  console.log("olen välivehje 1");
  next();
});

router.get ('/toka',function(request,response){
  response.send("olen toka hyvinki");
  console.log("tokapa tietenkin");
});

router.use (function (request,response,next) {
  console.log("olen välivehje 2");
  next();
});

router.get ('/kolmas/:nimi',function(request,response)
{
  response.send("olen vaan "+request.params.nimi);
  console.log(request.params.nimi);
});

router.use (function (request,response,next) {
  console.log("olen välivehje 3");
  next();
});

router.get ('/neljas/:enimi/:snimi',function(request,response)
{
  response.send("olen vaan "+request.params.enimi+" "+request.params.snimi);
  console.log(request.params.nimi);
});

router.post('/',function(request,response)
{
  response.send(request.body);
});

module.exports = router;
