const express = require("express");
const inscripcionRoute = express.Router();

// Student model
let InscripcionModel = require("../models/inscripcion");

inscripcionRoute.route("/inscription").get((req, res) => {
    InscripcionModel.find({}, function (err, inscripciones) {
      res.status(200).send(inscripciones);
    });
  });

// inscripcionRoute.route("/").get((req, res) => {
//     InscripcionModel.find((error, data, next) => {
//         if (error) {
//             return next(error);
//         } else {
//             console.log(error);
//             res.json(data);
//         }
//     });
// });

inscripcionRoute.route("/create-inscripcion").post((req, res, next) => {
    InscripcionModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// Update student
inscripcionRoute.route("/add-inscripcion/:id").put((req, res, next) => {
    InscripcionModel.findByIdAndUpdate(
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

inscripcionRoute.route("/edit-inscripcion/:id").get((req, res) => {
    InscripcionModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Update student
inscripcionRoute.route("/update-inscripcion/:id").put((req, res, next) => {
    InscripcionModel.findByIdAndUpdate(
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
inscripcionRoute.route("/delete-inscripcion/:id").delete((req, res, next) => {
    InscripcionModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = inscripcionRoute;