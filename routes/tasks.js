const express = require("express");
const router = express.Router();
const {
  getListOfTasks,
  createTaskItem,
  getSingleTask,
  updateTaskItem,
  deleteTaskItem,
} = require("../controllers/tasks");

router.route("/").get(getListOfTasks).post(createTaskItem);

router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTaskItem)
  .delete(deleteTaskItem);

module.exports = router;
