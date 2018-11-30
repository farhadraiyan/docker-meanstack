const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

//for login
router.get('/login', (req, res, next) => {
    Admin.find(function (err, admins) {
        res.json(admins);
    })
});

module.exports = router;