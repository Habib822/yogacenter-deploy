const mongoose = require("mongoose");
const { sortUserPlugins } = require("mongoose");

var mongoURL =
  "mongodb+srv://hinno331:Halima822%3F%3F@cluster0.misrpmo.mongodb.net/Yoga?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB connection failed");
});

connection.on("connected", () => {
  console.log("Mongo DB connection Successful");
});

module.exports = mongoose;
