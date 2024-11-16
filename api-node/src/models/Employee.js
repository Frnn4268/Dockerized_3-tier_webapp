const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  position: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  salary: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: true,
  },
}, {
  tableName: 'employees',
  schema: 'company', 
  timestamps: false,  
});

module.exports = Employee;
