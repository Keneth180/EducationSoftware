const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentProgSchema = new Schema(
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
    collection: "infoProg",
  }
);

module.exports = mongoose.model("studentProg", studentProgSchema);