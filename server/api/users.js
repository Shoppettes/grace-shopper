const router = require('express').Router()
const {User, Order} = require('../db/models')
module.exports = router

// get all users
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.status(200).json(users))
    .catch(next)
})

// get single user
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, {include: [Order]})
  .then(user => res.status(200).json(user))
  .catch(next)
})

// create user
router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(createdUser => User.findById(createdUser.id, {include: [Order]}))
  .then(newUser => res.status(201).json(newUser))
  .catch(next);
})

// delete user
router.delete('/:userId', (req, res, next) => {
  User.destroy({where: {id: req.params.userId}}, {include: [Order]})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})

// edit user => create admin privileges
router.put('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: {id: req.params.userId},
    returning: true
  }, {include: [Order]} )
  .then(updatedUser => res.status(201).json(updatedUser[1][0]))
  .catch(next)
})

// get all orders for a certain user
router.get('/:userId/orders', (req, res, next) => {
  User.findById(req.params.userId, {include: [{model: Order}]})
  .then(userWithOrders => res.status(200).json(userWithOrders))
  .catch(next);
})
