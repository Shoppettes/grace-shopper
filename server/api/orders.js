const router = require('express').Router()
const {Order, User, Product} = require('../db/models')
module.exports = router

// get all orders, including associated users and products
router.get('/', (req, res, next) => {
  Order.findAll({include: [User, Product]})
    .then(orders => res.json(orders))
    .catch(next)
})

// get a single order by id, including associated user and products
router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [User, Product]})
    .then(orders => res.json(orders))
    .catch(next)
})

// create a new order
router.post('/', (req, res, next) => {
  Order.create(req.body)
  .then(newOrder => res.json(newOrder))
  .catch(next);
})

// delete an order by id
router.delete('/:orderId', (req, res, next) => {
  Order.destroy({where: {id: req.params.orderId}})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})

// edit an order by id
router.put('/:orderId', (req, res, next) => {
  Order.update(req.body, {
    where: {id: req.params.orderId},
    returning: true
  })
  .then(updatedOrder => res.json(updatedOrder))
  .catch(next)
})

// get all products associated with an order
router.get('/:orderId/products', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [{model: Product}]})
  .then(orderWithProducts => res.json(orderWithProducts))
  .catch(next);
})
