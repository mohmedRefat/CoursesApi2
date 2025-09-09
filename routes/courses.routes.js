const courseController = require("../controllers/courseControllers");
const { body } = require("express-validator");

const express = require('express')
let router = express.Router()


router.get("/", courseController.getAllCourses);

router.get("/:courseId", courseController.getSingleCourse);


router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .isLength({ min: 2 })
      .withMessage("title is must be at least 2 digits "),
    body("price").notEmpty().withMessage("price is required"),
  ],
  courseController.addCourse
);

router.patch("/:courseId", courseController.updateCourse);


router.delete("/:courseId", courseController.deleteCourse);

module.exports = router;