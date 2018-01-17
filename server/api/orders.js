const router = require('express').Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const {Order, User, Product} = require('../db/models')
module.exports = router

// get current order on the session or create and send a new one if none exists on session
router.get('/currentOrder', (req, res, next) => {
  if (req.session.order !== undefined) res.json(req.session.order)
  else {
    return Order.create()
      .then(order => Order.findById(order.id, {include: [Product]}))
      .then(order => {
        req.session.order = order
        res.status(200).json(order)
      })
      .catch(next)
  }
})

// get all orders, including associated users and products
router.get('/', (req, res, next) => {
  Order.findAll({include: [User, Product]})
    .then(orders => res.status(200).json(orders))
    .catch(next)
})

// get a single order by id, including associated user and products
router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [User, Product]})
    .then(orders => res.status(200).json(orders))
    .catch(next)
})

// create a new order
router.post('/', (req, res, next) => {
  Order.findOrCreate({where: {userId: req.body.userId, orderStatus: 'pending'}})
  .spread((order, created) => {
    return order;
  })
  .then(order => Order.findById(order.dataValues.id, {include: [User, Product]}))
  .then(order => {
    req.session.order = order
    res.status(201).json(order)
  })
  .catch(next);
})

// delete an order by id
router.delete('/:orderId', (req, res, next) => {
  Order.destroy({where: {id: req.params.orderId}}, {include: [User, Product]})
  .then(() => res.sendStatus(204))
  .catch(next);
})

// edit an order by id
router.put('/:orderId', (req, res, next) => {
  Order.update(req.body, {
    where: {id: req.params.orderId},
    returning: true
  }, {include: [User, Product]})
  .then(order => {
    req.session.order = order[1][0];
    res.status(201).json(order)
  })
  .catch(next)
})

//edit and order and create a new user instance
router.put('/:orderId/newUser', (req, res, next) => {
  return User.create(req.body)
  .then(user => {
    return Order.update({orderStatus: 'awaiting shipment', userId: user.id}, {where: {id: req.params.orderId}, returning: true})
  })
  .then(updatedOrder => res.json(updatedOrder[1][0]))
  .catch(next);
})

// get all products associated with an order
router.get('/:orderId/products', (req, res, next) => {
  Order.findById(req.params.orderId, {include: [{model: Product}]})
  .then(orderWithProducts => res.status(200).json(orderWithProducts))
  .catch(next);
})

//update order with final checkout info
router.put('/submitOrder/:userId/:orderId/', (req, res, next) => {
  if (req.body === null) {
    console.log('in req.body.user')
    User.create(req.body)
    .then((newUser) => Order.update({userId: newUser.id, orderStatus: 'awaiting shipment'}, {where: {id: req.params.orderId}, returning: true}))
    .then((updatedOrder) => res.status(200).json(updatedOrder[1][0]));
  } else {
    User.update(req.body, {where: {id: req.params.userId}, returning: true})
    .then(() => {
      Order.update({orderStatus: 'awaiting shipment'}, {where: {id: req.params.orderId}, returning: true})
    })
    .then((updatedOrder) => res.status(200).json(updatedOrder[1][0]))
    .catch(next)
  }
})