const app = require('./src/app');
const config = require('./config');
const logger = require('./logger');
const connectToDB = require('./connect-to-db');

const boot = async () => {
  try {
    await connectToDB();

    app.listen(process.env.PORT || config.port, () => {
      logger.info(`Server running on port:  ${config.port}`);
    });
  } catch (error) {
    logger.error('Error to start server', { error, message: error.message });
  }
};

boot();
