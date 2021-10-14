const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let notaSchema = new Schema(
  {
      nota1: Number,
      nota2: Number,
  });

module.exports = mongoose.model('Notas', notaSchema);