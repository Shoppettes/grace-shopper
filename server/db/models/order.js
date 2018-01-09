const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  subtotal: Sequelize.DECIMAL(10,2),
  total: Sequelize.DECIMAL(10,2),
  shippingCost: Sequelize.DECIMAL(10,2),
  tax: Sequelize.FLOAT,
  shippingAddress: Sequelize.STRING,
  billingAddress: Sequelize.STRING,
  creditCardNumber: Sequelize.BIGINT,
  creditCardCCV: Sequelize.INTEGER,
  creditCardExpDate: Sequelize.DATE
})

module.exports = Order
