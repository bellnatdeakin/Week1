var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");

  // Logging activity
  var today = new Date();
  var currentTime =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(currentTime + " [Server Activity]: Page has been requested");
});

// Logging activity
var today = new Date();
var currentTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.listen(3000, () => console.log(currentTime + " [Server Activity]: Web server started"));
