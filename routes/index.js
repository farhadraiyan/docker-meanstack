const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
// const jwt=require('jsonwebtoken');



router.get('/jh', (req, res, next) => {
res("Hello")
});