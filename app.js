const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const dotenv = require("dotenv").config();
const DBConnection = require("./db/connect");

//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to the Task Manageer");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3917;

const start = async () => {
  try {
    await DBConnection(process.env.MONGO_URI);
    app.listen(PORT, console.log("Listening on port " + PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
