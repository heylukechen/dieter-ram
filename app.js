const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home");
});

app.get("/about", (req, res, next) => {
    res.sendFile(__dirname + "/views/about");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/views/gallery");
});

app.get("/resources", (req, res, next) => {
    res.sendFile(__dirname + "/views/resources");
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));