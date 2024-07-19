#!/usr/bin/env node

const { program } = require('commander');
const express = require('express');
const { startLoggingServer } = require('../src/index');

program
  .command('start')
  .description('Start the activity logging server')
  .action(() => {
    const app = express();

    // Add a root route handler to avoid "Cannot GET /" error
    app.get('/', (req, res) => {
      res.send('Express Activity Logger is running');
    });

    startLoggingServer(app);
  });

program.parse(process.argv);
