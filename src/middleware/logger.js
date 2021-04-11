const logger = require('../../logger');

const loggerMiddleware = (req, res, next) => {
  const currentDateTime = new Date();

  const formattedDate = `${currentDateTime.getFullYear()
  }-${
    currentDateTime.getMonth() + 1
  }-${
    currentDateTime.getDate()
  } ${
    currentDateTime.getHours()
  }:${
    currentDateTime.getMinutes()
  }:${
    currentDateTime.getSeconds()}`;

  const { method } = req;
  const { url } = req;
  const status = res.statusCode;
  const message = `[${formattedDate}] ${method}:${url} ${status}`;

  logger.info({ message });

  next();
};

module.exports = loggerMiddleware;
