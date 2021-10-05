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
  },
  {
    collection: "listStudents",
  }
);

module.exports = mongoose.model("student", studentSchema);
