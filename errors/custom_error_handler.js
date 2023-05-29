class CustomErroAPI extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customErrorHandler = (statusCode, message) => {
  return new CustomErroAPI(statusCode, message);
};

module.exports = { customErrorHandler, CustomErroAPI };
