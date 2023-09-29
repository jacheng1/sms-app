"use strict";
const { Customers } = require("../models");

// get information from the routes, and parse it
const CreateCustomer = async(req, res) => {
    console.log(`Logging request: ${req.body}`+JSON.stringify(req.body));

    await Customers.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    });

    res.status(200).send("Successfully saved.");
};

module.exports = CreateCustomer;