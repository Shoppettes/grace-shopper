const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  subTotal: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  }
})

module.exports = Cart
