//importando paquetes y módulos necesarios
const express = require("express");
const studenProgtRoute = express.Router();


// Student model
let StudentProgModel = require("../models/studentProg");

studenProgtRoute.route("/").get((req, res) => {
  StudentProgModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

studenProgtRoute.route("/create-student-prog").post((req, res, next) => {
  StudentProgModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Update student
studenProgtRoute.route("/add-student-prog/:id").put((req, res, next) => {
  StudentProgModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});

studenProgtRoute.route("/edit-student-prog/:id").get((req, res) => {
  StudentProgModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
studenProgtRoute.route("/update-student-prog/:id").put((req, res, next) => {
  StudentProgModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});

// Delete student
studenProgtRoute.route("/delete-student-prog/:id").delete((req, res, next) => {
  StudentProgModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = studenProgtRoute;