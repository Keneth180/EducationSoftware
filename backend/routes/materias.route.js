const express = require("express");
const materiaRoute = express.Router();

// Student model
let MateriaModel = require("../models/materias");

materiaRoute.route("/").get((req, res) => {
  MateriaModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

// materiaRoute.route("/create-student").post((req, res, next) => {
//   MateriaModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// Update student
// materiaRoute.route("/add-student/:id").put((req, res, next) => {
//   MateriaModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Student successfully updated!");
//       }
//     }
//   );
// });

// materiaRoute.route("/edit-student/:id").get((req, res) => {
//   MateriaModel.findById(req.params.id, (error, data, next) => {
//     if (error) {
//       console.log(error);
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Update student
// materiaRoute.route("/update-student/:id").put((req, res, next) => {
//   MateriaModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Student successfully updated!");
//       }
//     }
//   );
// });

// Delete student
materiaRoute.route("/delete-materia/:id").delete((req, res, next) => {
  MateriaModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = materiaRoute;
