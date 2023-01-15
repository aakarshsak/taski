const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const dotenv = require("dotenv").config();
const notFound = require("./middleware/not-found");
const DBConnection = require("./db/connect");

//middleware
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const PORT = 3917;

const start = async () => {
  try {
    await DBConnection(process.env.MONGO_URL);
    app.listen(PORT, console.log("Listening on port " + PORT + "..."));
  } catch (error) {
    console.log(error);
  }
};

start();
