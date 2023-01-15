const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async-wrapper");

const getListOfTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTaskItem = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  console.log(req.params.id);
  if (!task) res.status(404).json({ msg: "Id does not exist..." });

  res.status(200).json({ task });
});

const updateTaskItem = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) res.status(404).json({ msg: "Id does not exist..." });

  res.status(200).json({ task });
});

const deleteTaskItem = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });

  if (!task) res.status(404).json({ msg: "Id does not exist..." });

  res.status(200).json({ task });
});

module.exports = {
  getListOfTasks,
  createTaskItem,
  getSingleTask,
  updateTaskItem,
  deleteTaskItem,
};
