const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    codigo: {
      type: String,
    },
    nota1: {
      type: Number,
    },
    nota2: {
      type: Number,
    },
    nota3:{
      type: Number,
    },
    nota4: {
      type: Number
    },
    definitiva:{
      type: Number,
    },
  },
  {
    collection: "liststudents",
  }
);

module.exports = mongoose.model("student", studentSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let inscripcionSchema = Schema({
//     name: String,
//     coodigo: String,
//     notas: {type: mongoose.Schema.Types.ObjectId,ref: 'notas'},
// });
// module.exports = mongoose.model('listStudents', inscripcionSchema);
