const router = require('express').Router()
const {Photo, Review, Product, Category, Order} = require('../db/models')
module.exports = router


// get all products
router.get('/', (req, res, next) => {
    Product.findAll()
      .then(foundProducts => res.status(200).json(foundProducts))
      .catch(next)
})

// get single product by name, including assoicated categories, photos, and reviews
/*router.get('/:productName', (req, res, next) => {
  Product.findOne({include: [Photo, Review], where: {name: req.params.productName}})
    .then(foundProduct => res.status(200).json(foundProduct))
    .catch(next)
})*/

// get single product by id, including assocated categories, photos, and reviews
router.get('/:productId', (req, res, next) => {
  Product.findById(req.params.productId, {include: [Photo, Review, Category, Order]} )
    .then(foundProduct => res.status(200).json(foundProduct))
    .catch(next)
})

// create a new product
router.post('/', (req, res, next) => {
    Product.create(req.body)
      .then(createdProduct => Product.findById(createdProduct.id, {include: [Category, Photo, Review, Order]}))
      .then(foundProduct => res.status(201).json(foundProduct))
      .catch(next)
})

// update a product by name
router.put('/:productId', (req, res, next) => {
    Product.update(req.body, {
      where: {id: req.params.productId},
      returning: true
    }, {include: [Category, Photo, Review, Order]})
      .then( updatedProduct => res.status(201).json(updatedProduct))
      .catch(next)
})

// delete a product by name
router.delete('/:productId', (req, res, next) => {
    Product.destroy({where: {id: req.params.productId}}, {include: [Category, Photo, Review, Order]})
      .then( () => res.status(204).end())
      .catch(next)
})

