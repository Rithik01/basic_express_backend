// Now express is basically an object and you can stored all properties in the app variable //
const express = require("express");
require("dotenv").config();

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter here");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login Please</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
