const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'FML' });

module.exports = function log(message) {
  logger.info(message);
};
