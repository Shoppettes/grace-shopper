const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('OrderProducts', {
  quantity: Sequelize.INTEGER
})

OrderProduct.prototype.decrementQuantity = function () {
  quantity = this.quantity--;
}

OrderProduct.prototype.incrementQuantity = function () {
  quantity = this.quantity++;
}

module.exports = OrderProduct;
