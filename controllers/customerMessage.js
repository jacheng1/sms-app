"use strict";
const { CustomerMessage } = require("../models");

// get information from the routes, and parse it
const CreateCustomerMessage = async(req, res) => {
    console.log(`Logging request: ${req.body}`+JSON.stringify(req.body));

    await CustomerMessage.create({
        phoneNumber: req.body.phoneNumber, 
        message: req.body.message,
    });

    res.status(200).send("Successfully saved.");
};

module.exports = CreateCustomerMessage;
