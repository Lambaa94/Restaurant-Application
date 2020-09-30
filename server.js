var express = require("express");
var path = require("path");


var app = express();

var PORT = 5050;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservedTables = [];

var waitList = [];



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  


  app.post("/api/tables")
  


// var data = {

//     reservedTables = [],
//     waitList = [],
// }








app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
