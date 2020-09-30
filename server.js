var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 5050;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservedTables = [];


// displaying HTML
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  // Below is unfinished code
  // Needs Work
  app.get("/api/tables", (req, res) => {
    reservedTables.slice(0, 5);
  })
  
  app.get("api/waitlist", (req,res) => {
    reservedTables.slice(6);
  })

 
  
  // Below is unfinished code
  // Needs Work
  app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    console.log(newTable)
    
    if (reservations.length < 5) {
    reservedTables.push(newTable);
    
    res.json(newCharacter);
  } else {
    waitList.push(newTable)
  };
  
});



app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});
