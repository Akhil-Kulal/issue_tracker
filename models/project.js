const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

// creating schema for db
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

// setting schema for db and naming collection for accessing and using for read, write
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
