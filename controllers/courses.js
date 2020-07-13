const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = require('../model/course');

router.post("/add", (req, res) => {

  var course = new CourseModel();
  course.courseName = req.body.courseName;
  course.courseDuration = req.body.courseDuration;
  course.courseFee = req.body.courseFees;
  course.courseId = Math.ceil(Math.random() * 100000000);
  course.save((err, doc) => {
    if (!err) {
      res.redirect("list");
    }
    else {
      res.send("error bro");
    }
  })
})


router.get("/", (req, res) => {

  CourseModel.find((err, docs) => {
    if (!err) {
      res.render("list", {data: docs})
    }
    else {
      res.send('error')
    }
  }).lean();

});

module.exports = router;
