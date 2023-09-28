var express = require('express');
var router = express.Router();
const CreateCustomerMessage = require("../controllers/customerMessage");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST create customer and text */
router.post("/create-customer-text", CreateCustomerMessage);

module.exports = router;
