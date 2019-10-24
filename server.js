const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials/");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    name: "xabier casán"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.get("/lessons", (req, res) => {
  res.render("lessons", {});
});

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
