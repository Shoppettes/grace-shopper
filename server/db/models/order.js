const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  subtotal: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  },
  shippingCost: {
    type: Sequelize.INTEGER
  },
  tax: {
    type: Sequelize.INTEGER
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  billingAddress: {
    type: Sequelize.STRING
  },
  creditCardNumber: {
    type: Sequelize.INTEGER
  },
  CCV: {
    type: Sequelize.INTEGER
  },
  expirationDate: {
    type: Sequelize.DATE
  }
})

module.exports = Order
