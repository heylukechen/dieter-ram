const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/gallery.html");
});

app.get("/resources", (req, res, next) => {
    res.sendFile(__dirname + "/views/resources.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));