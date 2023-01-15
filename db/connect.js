const { mongoose } = require("mongoose");

const DBConnection = (url) => {
  console.log(url);
  return mongoose.set("strictQuery", true).connect(url);
};

module.exports = DBConnection;
