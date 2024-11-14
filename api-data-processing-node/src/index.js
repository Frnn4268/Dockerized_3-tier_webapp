const express = require('express');
const morgan = require('morgan');

const { pool } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

// setup the logger
app.use(morgan('tiny'));

app.get('/data', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM example;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  } finally {
    client.release();
  }
});

app.get('/ping', async (_, res) => {
  res.send('pong');
});

const server = app.listen(port, () => {
  console.log(`Data processing service listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.debug('HTTP server closed');
  });
});
