const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async_wrapper");
const { customErrorHandler } = require("../errors/custom_error_handler");

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findById({ _id: taskId });

  if (task === null) {
    return next(customErrorHandler(404, `Task with ${taskId} is not found`));
  }

  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(customErrorHandler(404, `Task with ${taskId} is not found`));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;

  const task = await Task.findByIdAndDelete({ _id: taskId });

  if (!task) {
    return next(customErrorHandler(404, `Task with ${taskId} is not found`));
  }

  res.sendStatus(200);
});

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
