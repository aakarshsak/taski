const { NotFound } = require("../errors/not-found");

const errorHandler = (err, req, res, next) => {
  console.log("inside error handler...");
  if (err instanceof NotFound) {
    console.log("Inside if ", err.message, err.statusCode);
    return res.status(404).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err.message });
};

module.exports = errorHandler;
