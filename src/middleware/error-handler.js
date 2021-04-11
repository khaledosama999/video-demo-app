const HttpStatus = require('http-status-codes');

const handleError = (err, req, res) => res.status(err.statusCode).send({ message: err.message, details: err });

const notFound = (req, res) => res.status(HttpStatus.StatusCodes.NOT_FOUND).send({ message: 'Your request not found' });

module.exports = {
  handleError,
  notFound,
};
