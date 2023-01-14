const getListOfTasks = (req, res) => {
  res.send("All Items: Here");
};

const createTaskItem = (req, res) => {
  res.send("Created Task Item...");
};

const getSingleTask = (req, res) => {
  res.send("This is the single task you wanted...");
};

const updateTaskItem = (req, res) => {
  res.send("Updated Task Item...");
};

const deleteTaskItem = (req, res) => {
  res.send("Deleted Task Item...");
};

module.exports = {
  getListOfTasks,
  createTaskItem,
  getSingleTask,
  updateTaskItem,
  deleteTaskItem,
};
