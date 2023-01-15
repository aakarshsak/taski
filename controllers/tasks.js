const getListOfTasks = (req, res) => {
  res.send("All Items: Here");
};

const createTaskItem = (req, res) => {
  console.log(req.body);
  res.send(req.body);
};

const getSingleTask = (req, res) => {
  res.send("ID : " + req.params.id);
};

const updateTaskItem = (req, res) => {
  res.send({ id: req.params.id });
};

const deleteTaskItem = (req, res) => {
  res.send({ id: req.params.id });
};

module.exports = {
  getListOfTasks,
  createTaskItem,
  getSingleTask,
  updateTaskItem,
  deleteTaskItem,
};
