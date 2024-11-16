const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Client = require('./Client'); 

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Client,
      key: 'id',
    },
    allowNull: false,
  },
  amount: {
    type: DataTypes.NUMERIC(10, 2),
    allowNull: false,
  },
  issued_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'invoices',
  schema: 'company',
  timestamps: false,
});

module.exports = Invoice;
