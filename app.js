var express = require("express");
var cors = require("cors");
var app = express();

var bodyParser = require("body-parser");
var tutorial = require("./routes/tutorial");



app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());


app.use("/api/tutorial", tutorial);
app.use((req, res, next) => {
  const error = new Error("resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
 

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
