const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll()
    // right now this route returns all info for all users. This will need to be updated to 
    //include a security check for 'isAdmin'
    .then(users => res.json(users))
    .catch(next)
})

//create user

router.post('/', (req, res, next) => {
  User.create(req.body)
  .then(newUser => res.json(newUser))
  .catch(next);
})
//delete user

router.delete('/:userId', (req, res, next) => {
  User.destroy({where: {id: req.params.userId}})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})
//edit user => create admin privileges or not

router.put('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: {id: req.params.userId},
    returning: true
  })
  .then(updatedUser => res.json(updatedUser[1][0]))
  .catch(next)
})

//get all orders for a certain user

router.get('/:userId/orders', (req, res, next) => {
  User.findById(req.params.userId, {include: [{model: Order}]})
  .then(userWithOrders => res.json(userWithOrders))
  .catch(next);
})

