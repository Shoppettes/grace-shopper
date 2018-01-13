const router = require('express').Router()
const {OrderProduct, Order, Product} = require('../db/models')
module.exports = router

//get an orderProduct by its OrderId
router.get('/:orderId', (req, res, next) => {

})
//res.status(201).json(createdOrderProduct)
//create an orderproduct
router.post('/', (req, res, next) => {
  OrderProduct.create(req.body)
  .then(createdOrderProduct => Order.findById(createdOrderProduct.orderId))
  .then( foundProduct => ({
    orderProductId: foundProduct.orderProducts.id,
    orderId: foundProduct.orderProducts.orderId,
    productId: foundProduct.id,
    productName: foundProduct.name,
    amount: foundProduct.orderProducts.quantity,
    price: foundProduct.price
  }))
  .then( newCartProduct => res.status(201).json(newCartProduct))
  .catch(next);
})

//update the orderProduct instance quantity
router.put('/:orderId/:productId', (req, res, next) => {
    OrderProduct.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    .then( orderProduct => {
      if (req.query.increment) orderProduct.incrementQuantity()
      else if (req.query.decrement) orderProduct.decrementQuantity()
      return Order.findById(orderProduct.orderId)
    })
    .then( foundProduct => ({
      orderProductId: foundProduct.orderProducts.id,
      orderId: foundProduct.orderProducts.orderId,
      productId: foundProduct.id,
      productName: foundProduct.name,
      amount: foundProduct.orderProducts.quantity,
      price: foundProduct.price
    }))
    .then( updatedCartProduct => res.status(201).json(updatedCartProduct))
    .catch(next);
})

// increment the quantity of a particular product in a particular order
// router.put('/:orderId/:productId', (req, res, next) => {
//  OrderProduct.findOne({where: {orderId: req.params.orderId, productId: req.params.productId}})
//    .then(orderProductInstance => {
//      orderProductInstance.incrementQuantity()
//    })
//    .catch(next)
// })

// // decrement the quantity of a particular product in a particular orders
// router.put('/:orderId/:productId', (req, res, next) => {
//  OrderProduct.findOne({where: {orderId: req.params.orderId, productId: req.params.productId}})
//    .then(orderProductInstance => {
//      orderProductInstance.decrementQuantity()
//    })
//    .catch(next)
// })

// delete a particular product from a particular order
router.delete('/:orderId/:productId', (req, res, next) => {
 OrderProduct.findOne({where: {orderId: req.params.orderId, productId: req.params.productId}})
   .then(orderProductInstance => {
     orderProductInstance.destroy()
   })
   .catch(next)
})
