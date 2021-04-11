const app = require('./src/app');
const config = require('./config');
const logger = require('./logger');
const connectToDB = require('./connect-to-db');

const boot = async () => {
  await connectToDB();
  app.listen(config.port, () => {
    logger.info(`App running on port: ${config.port}`);
  });
};

boot();
