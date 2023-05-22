const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const getSingleTask = (req, res) => {
  res.send("Get single task");
};

const createTask = (req, res) => {
  res.send("create task");
};

const updateTask = (req, res) => {
  res.send("update tasks");
};

const deleteTask = (req, res) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
