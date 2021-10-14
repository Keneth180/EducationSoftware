const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let inicioSesionSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("iniciarSesion", inicioSesionSchema);