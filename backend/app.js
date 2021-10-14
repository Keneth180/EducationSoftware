let express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  database = require("./database"),
  bodyParser = require("body-parser");

// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could't be connected to: " + error);
    }
  );

const studentAPI = require("../backend/routes/students.route");
const notas = require("../backend/routes/nota.route");
const studentProgAPI = require("../backend/routes/studentProg.route");
const studentDisenioAPI = require("../backend/routes/studentDisenio.route");
// const grupoAPI = require("../backend/routes/grupos.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/api", studentAPI);
app.use("/api/notas", notas);
app.use("/api-prog" ,studentProgAPI);
app.use("/api-disenio" ,studentDisenioAPI);


// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + server);
});

// Find 404
app.use((req, res, next) => {
  next(Error(404));
});

// error handler
app.use(function(err, req, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
