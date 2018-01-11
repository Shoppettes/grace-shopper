const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  subtotal: Sequelize.DECIMAL(10,2),
  shippingCost: Sequelize.DECIMAL(10,2),
  tax: Sequelize.FLOAT,
  // total: {
  //   type: Sequelize.VIRTUAL,
  //   get() {

  //   }
  // },
  // shippingAddress: {Sequelize.STRING},
  billingAddress: Sequelize.STRING,
  creditCardNumber: Sequelize.BIGINT,
  creditCardCCV: Sequelize.INTEGER,
  creditCardExpDate: Sequelize.DATE,
  orderStatus: Sequelize.ENUM('pending', 'awaiting payment', 'awaiting shipment', 'shipped', 'completed' ), /* 
  'pending' means the customer started the checkout process but did not complete it. 
  'awaiting payment' means the customer has completed the checkout process but payment has yet to be confirmed
  'awaiting shipment' means the order has been pulled and packaged and is awaiting collection from a shipping provider
  'shipped' means the order has been shipped but receipt has not been completed
  'completed' means the order has been shipped/picked up and reciept has been confirmed
  */
  // dateTimeOrderCreated: Sequelize.literal('CURRENT_TIMESTAMP'),
  // estimatedShipDate: {
  //   type: Sequelize.VIRTUAL,
  //   get() {
  //      this.dateTimeOrderCreated + 10;
  //   }
  // }
  //,
  //shipDate: {
  //   type: Sequelize.VIRTUAL, 
  //   get() {

  //   }
  // },
  // estimatedDeliveryDate: {

  // },
  // deliveryDate: {

  // },
  
})

module.exports = Order
