const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let materiaSchema = new Schema(
  {
    name: {
      type: String,
    },
    codigo: {
      type: String,
    },
    horas: {
      type: Number,
    },
  },
  {
    collection: "materias",
  }
);

module.exports = mongoose.model("materias", materiaSchema);
