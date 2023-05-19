const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/public/gallery.html");
});

app.get("/resources", (req, res, next) => {
    res.sendFile(__dirname + "/public/resources.html");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));