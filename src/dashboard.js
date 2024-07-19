const path = require('path');

function setupDashboard(app) {
  app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dashboard.html'));
  });
}

module.exports = { setupDashboard };
