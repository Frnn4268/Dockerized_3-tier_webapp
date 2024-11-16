const { Sequelize } = require('sequelize');
const fs = require('fs');

const databaseUrl =
  process.env.DATABASE_URL ||
  fs.readFileSync(process.env.DATABASE_URL_FILE, 'utf8');

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: console.log, 
});

module.exports = sequelize;
