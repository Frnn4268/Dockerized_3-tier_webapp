const { pool } = require('./db');

const seedDatabase = async () => {
  const client = await pool.connect();
  try {
    // Example table
    await client.query(`
      CREATE TABLE IF NOT EXISTS example (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        value INTEGER
      );
    `);

    // Init data insert
    await client.query(`
      INSERT INTO example (name, value)
      VALUES ('Sample Data', 123);
    `);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    client.release();
    pool.end();
  }
};

seedDatabase();
