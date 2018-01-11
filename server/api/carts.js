const router = require('express').Router()
const {Order, Product, User} = require('../db/models')
module.exports = router

// get all carts
router.get('/', (req, res, next) => {
  Order.findAll({include: [Product, User]})
    .then(orders => res.json(orders))
    .catch(next)
})

// create cart
router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then(newOrder => res.json(newOrder))
  .catch(next);
})

// delete cart by id
router.delete('/:orderId', (req, res, next) => {
  Order.destroy({where: {id: req.params.orderId}})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})

// edit cart by id
router.put('/:orderId', (req, res, next) => {
  Order.update(req.body, {
    where: {id: req.params.orderId},
    returning: true
  })
  .then(updatedOrder => res.json(updatedOrder))
  .catch(next)
})

// get all products in a cart
router.get('/:orderId/products', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [{model: Product}]})
  .then(orderWithProducts => res.json(orderWithProducts.products))
  .catch(next);
})
