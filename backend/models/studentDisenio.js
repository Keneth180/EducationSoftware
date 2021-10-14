const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentDisenioSchema = new Schema(
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
    collection: "infoDisenio",
  }
);

module.exports = mongoose.model("studentDisenio", studentDisenioSchema);