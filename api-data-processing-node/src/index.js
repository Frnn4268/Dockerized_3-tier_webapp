const express = require('express');
const { pool } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
  console.log(`Data processing service listening on port ${port}`);
});
