const mongoose = require('mongoose');
const logger = require('./logger');

const { DBAuth, DBUrl } = require('./config');

const connectToDB = async () => {
  mongoose.Promise = global.Promise;
  return mongoose.connect(`${DBUrl}`,
    {
      auth: DBAuth,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => logger.info('MongoDB connected', { DBUrl, DBAuth }))
    .catch((error) => logger.error('Error to connect to mongodb', { error, message: error.message }));
};

module.exports = connectToDB;
