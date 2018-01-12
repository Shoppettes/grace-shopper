const router = require('express').Router()
const {OrderProduct} = require(../db/models)
module.exports = router

// increment the quantity of a particular product in a particular order
router.put('/:orderId/:productId', (req, res, next) => {
  OrderProduct.findOne({where: {orderId: req.params.orderId}, {productId: req.params.productId}})
    .then(orderProductInstance => {
      orderProductInstance.incrementQuantity()
    })
    .catch(next)
})

// decrement the quantity of a particular product in a particular orders
router.put('/:orderId/:productId', (req, res, next) => {
  OrderProduct.findOne({where: {orderId: req.params.orderId}, {productId: req.params.productId}})
    .then(orderProductInstance => {
      orderProductInstance.decrementQuantity()
    })
    .catch(next)
})

// delete a particular product from a particular order
router.delete('/:orderId/:productId', (req, res, next) => {
  OrderProduct.findOne({where: {orderId: req.params.orderId}, {productId: req.params.productId}})
    .then(orderProductInstance => {
      orderProductInstance.destroy()
    })
    .catch(next)
})
