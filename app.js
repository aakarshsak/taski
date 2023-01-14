const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to the Task Manageer");
});

const PORT = 3917;

app.listen(PORT, console.log("Listening on port " + PORT));
