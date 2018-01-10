const router = require('express').Router()
const {Cart, Product, User} = require('../db/models')
module.exports = router

// get all carts
router.get('/', (req, res, next) => {
  Cart.findAll({include: [Product, User]})
    .then(carts => res.json(carts))
    .catch(next)
})

// create cart
router.post('/', (req, res, next) => {
  Cart.create(req.body)
  .then(newCart => res.json(newCart))
  .catch(next);
})

// delete cart by id
router.delete('/:cartId', (req, res, next) => {
  Cart.destroy({where: {id: req.params.cartId}})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})

// edit cart by id
router.put('/:cartId', (req, res, next) => {
  Cart.update(req.body, {
    where: {id: req.params.cartId},
    returning: true
  })
  .then(updatedCart => res.json(updatedCart))
  .catch(next)
})

// get all products in a cart
router.get('/:cartId/products', (req, res, next) => {
  Cart.findById(req.params.cartId, {include: [{model: Product}]})
  .then(cartWithProducts => res.json(cartWithProducts.products))
  .catch(next);
})
