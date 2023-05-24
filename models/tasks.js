const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
    trim: true,
    maxlength: [20, "Name cannot exceed 20 characters"],
  },
  completed: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Task", schema);
