const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      silent: process.env.NODE_ENV === 'testing',
    }),
    new winston.transports.File({
      filename: 'logs',
      silent: process.env.NODE_ENV === 'testing',
    }),
  ],
});

module.exports = logger;
