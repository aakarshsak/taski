const { mongoose } = require("mongoose");

const DBConnection = (url) => {
  mongoose
    .set("strictQuery", true)
    .connect(url)
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log(err));
};

module.exports = DBConnection;
