const bunyan = require('bunyan');
const express = require('express');
const {LoggingBunyan} = require('@google-cloud/logging-bunyan');

const loggingBunyan = new LoggingBunyan();

const logger = bunyan.createLogger({
  name: 'MY BUNYAN LOGGER',
  streams: [
    { stream: process.stdout, level: 'info'},
    loggingBunyan.stream('info')
  ]
});

logger.error('logger error initialized');
logger.info('logger info initialized');

const app = express();

app.get('/', (req, res) => {
  logger.info('logger info from request');
  logger.error('logger error from request');
  res.send('hello world');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info('server listening on port', port);
});
