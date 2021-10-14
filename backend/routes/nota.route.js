const express = require("express");
const notaRoute = express.Router();

// Student model
let NotaModel = require("../models/notas");

// inscripcionRoute.route("/inscription").get((req, res) => {
//     InscripcionModel.find({}, function (err, inscripciones) {
//         res.status(200).send(inscripciones);
//     });
// });

notaRoute.route("/").get((req, res) => {
    NotaModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

notaRoute.route("/create-nota").post((req, res, next) => {
    NotaModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// Update student
notaRoute.route("/add-nota/:id").put((req, res, next) => {
    NotaModel.findByIdAndUpdate(
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

notaRoute.route("/edit-nota/:id").get((req, res) => {
    NotaModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Update student
notaRoute.route("/update-nota/:id").put((req, res, next) => {
    NotaModel.findByIdAndUpdate(
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
notaRoute.route("/delete-nota/:id").delete((req, res, next) => {
    NotaModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = notaRoute;