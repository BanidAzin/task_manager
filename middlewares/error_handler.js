const { CustomErroAPI } = require("../errors/custom_error_handler");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErroAPI) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: err.message });
};

module.exports = errorHandler;
