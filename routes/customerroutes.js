const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

//for login
router.get('/customers', (req, res, next) => {
    Customer.find(function (err, customers) {
        res.json(customers);
    })
});

module.exports = router;