const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  contact_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true,
  },
}, {
  tableName: 'clients',
  schema: 'company',
  timestamps: false,
});

module.exports = Client;
