const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  subtotal: Sequelize.DECIMAL(10, 2),
  shippingCost: Sequelize.DECIMAL(10, 2),
  tax: Sequelize.FLOAT,
  billingAddress: Sequelize.STRING,
  shippingAddress: Sequelize.STRING,
  creditCardNumber: Sequelize.BIGINT,
  creditCardCCV: Sequelize.INTEGER,
  creditCardExpDate: Sequelize.DATE,
  /*'pending' means the customer started the checkout process but did not complete it.
  'awaiting payment' means the customer has completed the checkout process but payment has yet to be confirmed
  'awaiting shipment' means the order has been pulled and packaged and is awaiting collection from a shipping provider
  'shipped' means the order has been shipped but receipt has not been completed
  'completed' means the order has been shipped/picked up and reciept has been confirmed*/
  orderStatus: Sequelize.ENUM('pending', 'awaiting payment', 'awaiting shipment', 'shipped', 'completed' ),
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  deliveryDate: Sequelize.DATE
}, {getterMethods: {
    estimatedShippingDate: function(){
       let retDate = new Date(new Date().setDate(this.orderDate.getDate() + 2));
       return retDate;
    },
    estimatedDeliveryDate: function(){
      let retDate = new Date(new Date().setDate(this.orderDate.getDate() + 10));
      return retDate;
   },
   totalPrice: function(){
    return this.subTotal + this.shippingCost + this.tax;
 }
}
})

module.exports = Order
