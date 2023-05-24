const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findById({ _id: taskId });

    if (task === null) {
      return res
        .status(404)
        .json({ message: `Task with ${taskId} is not found` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with ${taskId} is not found` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findByIdAndDelete({ _id: taskId });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with ${taskId} is not found` });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
