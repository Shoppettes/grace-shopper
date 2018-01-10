const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  subTotal: Sequelize.DECIMAL(10,2),
  total: Sequelize.DECIMAL(10,2)
})

module.exports = Cart
