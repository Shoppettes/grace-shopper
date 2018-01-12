const router = require('express').Router()
const {User, Product, Category} = require('../db/models')
module.exports = router


// get all products
router.get('/', (req, res, next) => {
    Product.findAll({include: [Category]})
      .then(foundProducts => res.json(foundProducts))
      .catch(next)
})

// get single product by name, including assoicated categories, photos, and reviews
router.get('/:productName', (req, res, next) => {
  Product.findOne({include: [Category, Photo, Review], where: {name: req.params.productName}})
    .then(foundProduct => res.json(foundProduct))
    .catch(next)
})

// get single product by id, including assocated categories, photos, and reviews
router.get('/:productId', (req, res, next) => {
  Product.findById({include: [Category, Photo, Review], where: {id: req.params.productId}})
    .then(foundProduct => res.json(foundProduct))
    .catch(next)
})

// create a new product
router.post('/', (req, res, next) => {
    Product.create(req.body)
      .then(createdProduct => Product.findById(createdProduct.id, {include: [Category]}))
      .then(foundProduct => res.json(foundProduct))
      .catch(next)
})

// update a product by name
router.put('/:productId', (req, res, next) => {
    Product.update(req.body, {
      where: {name: req.params.productName},
      returning: true
    })
      .then( updatedProduct => res.json(updatedProduct))
      .catch(next)
})

// delete a product by name
router.delete('/:productId', (req, res, next) => {
    Product.destroy({where: {name: req.params.productName}})
      .then( () => res.status(204).end())
      .catch(next)
})
