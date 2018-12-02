const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

//for login
router.get('/customers', (req, res, next) => {
    Customer.find(function (err, customers) {
        res.json(customers);
    })
});

router.post('/addcustomers', (req, res, next) => {
    let newcust = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        status: req.body.status


    })

    newcust.save((err, customer) => {
        if (err) { res.json("contact not saved") }

        else {
            res.json("contact saved")
        }

    })


})

router.put("/updatecustomer/:id", (req, res, next) => {
    let newCust = new Customer({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        phone: req.body.phone,
        status: req.body.status
    });
    Customer.findOneAndUpdate({ _id: req.params.id },newCust, {"new": true} ,(err, customer) => {
        if (err) {
            res.send(err)
        }
        res.send(customer)

    });
});
router.delete("/customer/:id", (req, res, next) => {
    Customer.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
});

module.exports = router;