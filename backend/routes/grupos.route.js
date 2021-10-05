const express = require("express");
const groupRoute = express.Router();

// Student model
let GroupModel = require("../models/groups");

groupRoute.route("/").get((req, res) => {
    GroupModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});

// groupRoute.route("/create-student").post((req, res, next) => {
//   GroupModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

// Update student
// groupRoute.route("/add-student/:id").put((req, res, next) => {
//   GroupModel.findByIdAndUpdate(
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

// groupRoute.route("/edit-student/:id").get((req, res) => {
//   GroupModel.findById(req.params.id, (error, data, next) => {
//     if (error) {
//       console.log(error);
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Update student
// groupRoute.route("/update-student/:id").put((req, res, next) => {
//   GroupModel.findByIdAndUpdate(
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
groupRoute.route("/delete-group/:id").delete((req, res, next) => {
    GroupModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = groupRoute;