const router = require('express').Router()
const {OrderProduct, Order, Product} = require('../db/models')
module.exports = router

// get all the cart products by order id
router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [Product]})
    .then( foundOrder => {
      let productArray = foundOrder.products
      return res.status(200).json(productArray)
    })
    .catch(next)
})

// create a new orderProduct instance
router.post('/:orderId/:productId', (req, res, next) => {
  return OrderProduct.create({orderId: +req.params.orderId, productId: +req.params.productId})
  .then(createdOrderProduct => Order.findById(createdOrderProduct.orderId, {include: [Product]}))
  .then(order => {
    req.session.order = order
    res.status(201).json(order)
  })
  .catch(next);
})

// update the orderProduct instance quantity
router.put('/:orderId/:productId/:quantity', (req, res, next) => {
    OrderProduct.findOne({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId,
      }
    })
    .then(orderProduct => orderProduct.update({quantity: req.params.quantity}))
    .then(() => Order.findById(req.params.orderId, {include: [Product]}))
    .then(order => {
      req.session.order = order
      res.status(201).json(order)
    })
    .catch(next);
})

// delete a product from an order (by deleting the orderProduct instance) and return the updated order
router.delete('/:orderId/:productId', (req, res, next) => {
 OrderProduct.findOne({where: {orderId: req.params.orderId, productId: req.params.productId}})
   .then(orderProductInstance => {
     return orderProductInstance.destroy()
   })
   .then(() => Order.findById(req.params.orderId, {include: [Product]}))
   .then(order => {
     req.session.order = order
     res.status(204).json(order)
   })
   .catch(next)
})
