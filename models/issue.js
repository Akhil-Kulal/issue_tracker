const mongoose = require("mongoose");

// creating schema for db
const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

// setting schema for db and naming collection for accessing and using for read and write
const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
