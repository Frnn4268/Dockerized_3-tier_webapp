const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Department = sequelize.define('Department', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  budget: {
    type: DataTypes.NUMERIC(12, 2),
    allowNull: true,
  },
}, {
  tableName: 'departments',
  schema: 'company',
  timestamps: false,
});

module.exports = Department;
