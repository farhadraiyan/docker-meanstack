const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
// const jwt=require('jsonwebtoken');


//for login
router.get('/login', (req, res, next) => {
    Admin.find(function (err, admins) {
        
        res.json(admins);
    })
});
router.post('/register', (req, res, next) => {
    let newAdmin = new Admin({
        userName: req.body.userName,
        password: req.body.password,


    })

    newAdmin.save((err, admin) => {
        if (err) { res.json("contact not saved") }

        else {
            res.json("contact saved")
        }

    })


})

router.put("/updateadmin/:id", (req, res, next) => {
    let newAdmin = new Admin({
        _id: req.params.id,
        userName: req.body.userName,
        password: req.body.password

    });
    Admin.findOneAndUpdate({ _id: req.params.id },newAdmin, {"new": true} ,(err, admin) => {
        if (err) {
            res.send(err)
        }
        res.send(admin)

    });
});
router.delete("/admin/:id", (req, res, next) => {
    Admin.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
});

module.exports = router;