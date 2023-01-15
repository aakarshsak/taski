const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async-wrapper");
const { createNotFoundError } = require("../errors/not-found");

const getListOfTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTaskItem = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  console.log(req.params.id);
  if (!task)
    return next(
      createNotFoundError(`Id ${req.params.id} does not exist...`, 404)
    );

  res.status(200).json({ task });
});

const updateTaskItem = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task)
    return next(
      createNotFoundError(`Id ${req.params.id} does not exist...`, 404)
    );

  res.status(200).json({ task });
});

const deleteTaskItem = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });

  if (!task)
    return next(
      createNotFoundError(`Id ${req.params.id} does not exist...`, 404)
    );

  res.status(200).json({ task });
});

module.exports = {
  getListOfTasks,
  createTaskItem,
  getSingleTask,
  updateTaskItem,
  deleteTaskItem,
};
