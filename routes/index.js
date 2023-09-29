var express = require('express');
var router = express.Router();
const CreateCustomerMessage = require("../controllers/customerMessage");
const CreateCustomer = require("../controllers/customers");
const CreateTextMessage = require("../controllers/textMessage");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST create customer and text */
router.post("/create-customer-text", CreateCustomerMessage);

/* POST create customer */
router.post("/create-customer", CreateCustomer);

/* POST create text message */
router.post("/create-text-message", CreateTextMessage);

module.exports = router;
