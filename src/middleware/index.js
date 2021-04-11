const logger = require('./logger');
const errorHandlerMiddleware = require('./error-handler');

module.exports = {
  loggerMiddleware: logger,
  errorHandlerMiddleware,
};
