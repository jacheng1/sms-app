"use strict";
const { CustomerMessage } = require("../models");

// get information from the routes, and parse it
const CreateCustomerMessage = async(req, res) => {
    await CustomerMessage.create({
        phoneNumber: req.body.phoneNumber, 
        message: req.body.message,
    });
};

module.exports = CreateCustomerMessage;
