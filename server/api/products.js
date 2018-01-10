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
router.post('/', (req, res, next) => {
    Product.create(req.body)
      .then( createdProduct => Product.findById( createdProduct.id, {include: [Category]}))
      .then( foundProduct => res.json(foundProduct))
      .catch(next)
})


//UPDATE A PRODUCT BY NAME
router.put('/:name', (req, res, next) => {
    Product.update(req.body, {
      where: {name: req.params.name},
      returning: true
    })
      .then( updatedProduct => res.json(updatedProduct))
      .catch(next)
})

//DELETE A PRODUCT BY NAME
router.delete('/:name', (req, res, next) => {
    Product.destroy({where: {name: req.params.name}})
      .then( () => res.status(204).end())
      .catch(next)
})
