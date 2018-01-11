const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('OrderProducts', {
  quantity: Sequelize.INTEGER;
})

module.exports = OrderProduct;
