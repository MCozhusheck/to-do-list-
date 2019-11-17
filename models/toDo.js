const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
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
    type: String,
    required: false,
    default: false
  }
});
