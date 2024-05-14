const express = require('express');
const server = require('./config/server.js');
const routes = require('./controllers/routes.js');
const app = express();

app.use('/', routes);

app.listen(server.port, () => {
  console.log(`Server started on port 3000 ${server.port}`)
})