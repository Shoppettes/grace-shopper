const router = require('express').Router()
const {User, Product, Category} = require('../db/models')
module.exports = router


//GET ALL PRODUCTS
router.get('/', (req, res, next) => {
    Product.findAll({include: [Category]})
      .then( foundProducts => res.json(foundProducts))
      .catch(next)
})

//GET PRODUCT BY NAME
router.get('/:name', (req, res, next) => {
  Product.findOne({include: [Category], where: {name: req.params.name}})
    .then( foundProduct => res.json(foundProduct))
    .catch(next)
})

//CREATE A PRODUCT
router.post('/:name', (req, res, next) => {
    Product.create(req.body)
      .then( createdProduct => Product.findById( createdProduct.id, {include: [Category]}))
      .then( foundProduct => res.json(foundProduct))
      .catch(next)
})


//UPDATE A PRODUCT BY NAME
router.put('/', (req, res, next) => {

})

//DELETE A PRODUCT BY ID
router.delete('/', (req, res, next) => {

})
