const mongoose = require("mongoose");

const toDoTaskSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: false,
    default: "Anonymous User"
  },
  text: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: false,
    default: false
  }
});

const ToDoTask = mongoose.model("toDoTask", toDoTaskSchema);

module.exports = {
  ToDoTask
};
