const { getDateTime } = require('./db');
const express = require('express');
const morgan = require('morgan');
const sequelize = require('./sequelize');
const Employee = require('./models/Employee'); 

const app = express();
const port = process.env.PORT || 3000;

// setup the logger
app.use(morgan('tiny'));

// Connect to the database and perform an example query
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Database connection error:', err));

app.get('/', async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = 'node';

  // Do a query to the employees table
  try {
    const employees = await Employee.findAll(); // Get all employees
    response.employees = employees; // Add the employees to the response
    res.send(response);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).send('Error fetching employees');
  }
});

app.get('/ping', async (_, res) => {
  res.send('pong');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.debug('HTTP server closed');
  });
});
