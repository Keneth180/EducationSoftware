//importando paquetes y módulos necesarios
const express = require("express");
const studenDiseniotRoute = express.Router();


// Student model
let StudentDisenioModel = require("../models/studentDisenio");

studenDiseniotRoute.route("/").get((req, res) => {
  StudentDisenioModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

studenDiseniotRoute.route("/create-student-disenio").post((req, res, next) => {
  StudentDisenioModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Update student
studenDiseniotRoute.route("/add-student-disenio/:id").put((req, res, next) => {
  StudentDisenioModel.findByIdAndUpdate(
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

studenDiseniotRoute.route("/edit-student-disenio/:id").get((req, res) => {
  StudentDisenioModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
studenDiseniotRoute.route("/update-student-disenio/:id").put((req, res, next) => {
  StudentDisenioModel.findByIdAndUpdate(
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
studenDiseniotRoute.route("/delete-student-disenio/:id").delete((req, res, next) => {
  StudentDisenioModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = studenDiseniotRoute;