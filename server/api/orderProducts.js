const router = require('express').Router()
const {OrderProduct, Order, Product} = require('../db/models')
module.exports = router

//get all the cart products by order id!
router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [Product]})
    .then( foundOrder => {
      let productArray = foundOrder.products
      return res.status(200).json(productArray)
    })
    .catch(next)
})

//res.status(201).json(createdOrderProduct)
//create an orderproduct
router.post('/', (req, res, next) => {
  OrderProduct.create(req.body)
  .then(createdOrderProduct => Order.findById(createdOrderProduct.orderId, {include: [Product]}))
  .then( foundOrder => {
    let productArray = foundOrder.products
    return res.status(201).json(productArray)
  })
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
      return Order.findById(req.params.orderId, {include: [Product]})
    })
    .then( foundOrder => {
      let updatedProduct = foundOrder.products.find( product => product.id == req.params.productId)
      res.status(220).json(updatedProduct)
      //return res.status(201).json(updatedProduct)
    })
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
