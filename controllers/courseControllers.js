let { courses } = require("../Data/data");
const { validationResult } = require("express-validator");

const getAllCourses = (req, res) => {
  res.json(courses);
};
//* add comments

const getSingleCourse = (req, res) => {
  let courseId = +req.params.courseId;
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).json({ msg: "Not found" });
  }

  res.json(course);
};

const addCourse = (req, res) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return res.status(400).json(errs.array());
  }
  let course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

const updateCourse = (req, res) => {
  let courseId = +req.params.courseId;

  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).json({ msg: "Not found" });
  }

  course = { ...course, ...req.body };

  res.status(201).json(course);
};

const deleteCourse = (req, res) => {
  let courseId = +req.params.courseId;

  courses = courses.filter((course) => course.id !== courseId);

  return res.status(200).json({ msg: "sucess" });
};

module.exports = {
  getAllCourses,
  updateCourse,
  deleteCourse,
  addCourse,
  getSingleCourse,
};
