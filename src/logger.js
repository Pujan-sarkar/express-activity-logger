const morgan = require('morgan');
const moment = require('moment');

function setupLogger(app, io) {
  const format = ':method :url :status :response-time ms - :res[content-length]';
  
  morgan.token('date', () => moment().format('YYYY-MM-DD HH:mm:ss'));

  app.use(morgan(format, {
    stream: {
      write: (message) => {
        io.emit('log', { message, date: new Date() });
      }
    }
  }));

  app.use((err, req, res, next) => {
    io.emit('error', { message: err.message, stack: err.stack, date: new Date() });
    next(err);
  });
}

module.exports = { setupLogger };
