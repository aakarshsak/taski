const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to the Task Manageer");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3917;

app.listen(PORT, console.log("Listening on port " + PORT));
