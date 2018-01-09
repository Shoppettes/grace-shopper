const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  subtotal: Sequelize.INTEGER,
  total: Sequelize.INTEGER,
  shippingCost: Sequelize.INTEGER,
  tax: Sequelize.INTEGER,
  shippingAddress: Sequelize.STRING,
  billingAddress: Sequelize.STRING,
  creditCardNumber: Sequelize.INTEGER,
  creditCardCCV: Sequelize.INTEGER,
  creditCardExpDate: Sequelize.DATE
})

module.exports = Order
