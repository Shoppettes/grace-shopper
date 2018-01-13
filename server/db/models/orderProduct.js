const Sequelize = require('sequelize');
const db = require('../db');

const OrderProduct = db.define('OrderProducts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  quantity: Sequelize.INTEGER
})

OrderProduct.prototype.decrementQuantity = function () {
  this.quantity = this.quantity--;
}

OrderProduct.prototype.incrementQuantity = function () {
  this.quantity = this.quantity++;
}

module.exports = OrderProduct;
