const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');
const moment = require('moment');
const path = require('path');
const { setupLogger } = require('./logger');
const { setupDashboard } = require('./dashboard');

function startLoggingServer(app) {
  const server = http.createServer(app);
  const io = socketIo(server);

  setupLogger(app, io);
  setupDashboard(app);

  const port = process.env.PORT || 3001;
  server.listen(port, () => {
    console.log(`Activity logging server running at http://localhost:${port}`);
  });
}

module.exports = { startLoggingServer };
