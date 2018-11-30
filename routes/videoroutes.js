const express = require("express");
const router = express.Router();
const Video = require('../models/Videos');
const Admin = require("../models/Admin");
//retrieve
router.get('/videolist', (req, res, next) => {
    Video.find(function (err, videos) {
        res.json(videos);
    })
});


//add contact

router.post('/addvideo', (req, res, next) => {
    let newVideo = new Video({
        title: req.body.title,
        runtime: req.body.runtime,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director,
        status: req.body.status,
        imgPath: req.body.imgPath,
    });
    newVideo.save((err, video) => {
        if (err) {
            res.json({ msg: "contact not saved" })
        }
        else {
            res.json({ msg: "contact  saved" })
        }
    })

});

router.delete("/video/:id", (req, res, next) => {
    Video.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
});

router.put("/reserve/:id", (req, res, next) => {
    Video.findById({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            result.status = "Unavailable"
            result.save();
            res.json(result)
        }
    })
});

//to update
router.put("/updatevideo/:id", (req, res, next) => {
    let newVideo = new Video({
        _id: req.params.id,
        title: req.body.title,
        runtime: req.body.runtime,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director,
        status: req.body.status,
        imgPath: req.body.imgPath,
    });
    Video.findOneAndUpdate({ _id: req.params.id },newVideo, {"new": true} ,(err, video) => {
        if (err) {
            res.send(err)
        }
        res.send(video)

    });
});



module.exports = router;