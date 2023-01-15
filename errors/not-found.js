class NotFound extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createNotFoundError = (msg, statusCode) => {
  console.log("Inside create not found...");
  return new NotFound(msg, statusCode);
};

module.exports = { NotFound, createNotFoundError };
