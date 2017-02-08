// Application entry point
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
require('./server/routes')(app);

// Directories with static files
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome. Nothing here.',
}));

// start the server
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});