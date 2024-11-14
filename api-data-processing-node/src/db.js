const fs = require('fs');

const { Pool } = require('pg');

databaseUrl =
  process.env.DATABASE_URL ||
  fs.readFileSync(process.env.DATABASE_URL_FILE, 'utf8');

const pool = new Pool({
  connectionString: databaseUrl,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = { pool };
