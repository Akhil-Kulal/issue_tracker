// importing mongoose library
const mongoose = require("mongoose");

// connecting to the localhost/system server of our project db
mongoose.connect(
  "mongodb+srv://AkhileshP:akhilkulal@cluster0.ckuf0qk.mongodb.net/issuetracker?"
);

// connecting between database and mongoose
const db = mongoose.connection;

// if connection gets error
db.on("error", console.error.bind(console, "connection error to db:"));

// if connection is established
db.once("open", function () {
  console.log("Successfully connected to database");
});
