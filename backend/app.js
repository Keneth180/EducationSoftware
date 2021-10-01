const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/educationsoftware";
const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB");
  },
  (err) => {
    console.log(err);
  }
);
