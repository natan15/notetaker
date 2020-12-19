const express = require('express')
const path = require('path')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.get("/notes", function(req, res) {
  //res.send("hello")
  res.sendFile(path.join(__dirname, "public/notes.html"));
 // res.json(path.join(__dirname, "notes.html"));
});



app.get("/api/notes", function(req, res) {
  //res.send("hello")
  res.sendFile(path.join(__dirname, "db/db.json"));
 // res.json(path.join(__dirname, "notes.html"));
});

app.post("/api/notes", function(req, res) {
  //res.send("somewhere else")
  var data = fs.readFileSync('db/db.json')
  data = JSON.parse(data)
  req.body.id = uuidv4()
  data.push(req.body)
  fs.writeFileSync('db/db.json', JSON.stringify(data))
  res.end()
});

app.delete("/api/notes/:id", function(req, res){
 var data = fs.readFileSync('db/db.json')
 data = JSON.parse(data)
 for (i = 0; i < id; i++){
   
 }

 fs.writeFileSync('db/db.json', JSON.stringify(data))
 res.end()
});

app.get("*", function(req, res) {
  //res.send("somewhere else")
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});