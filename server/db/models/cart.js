const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  subTotal: Sequelize.INTEGER,
  total: Sequelize.INTEGER
})

module.exports = Cart
