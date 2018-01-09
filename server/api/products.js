const router = require('express').Router()
const {User, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Product.findAll()
      .then( foundProducts => res.json(foundProducts))
      .catch(next)
})

router.get('/:name', (req, res, next) => {
  Product.findOne({ where: {name: req.params.name}})
    .then( foundProduct => res.json(foundProduct))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then( foundProduct => res.json(foundProduct))
    .catch(next)
})

router.post('/:name', (req, res, next) => {

})

router.put('/', (req, res, next) => {

})

router.delete('/', (req, res, next) => {

})
