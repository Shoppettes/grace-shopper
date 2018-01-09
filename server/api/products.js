const router = require('express').Router()
const {User, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Product.findAll()
      .then( foundProducts => res.json(foundProducts))
      .catch(next)
})

router.get('/:name', (req, res, next) => {
  Product.findOne(req.params.name)
    .then( foundProduct => res.json(foundProduct))
    .catch(next)
})

router.post('/', (req, res, next) => {

})

router.put('/', (req, res, next) => {

})

router.delete('/', (req, res, next) => {

})
