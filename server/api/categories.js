const router = require('express').Router()
const {Category, Product} = require('../db/models')
module.exports = router

// get all categories
router.get('/', (req, res, next) => {
  Category.findAll({include: [Product]})
    .then(categories => res.status(200).json(categories))
    .catch(next)
})

// create category : allowed for just admins
router.post('/', (req, res, next) => {
  Category.create(req.body)
  .then(createdCategory => Category.findById(createdCategory.id, {include: [Product]}))
  .then(newCategory => res.status(201).json(newCategory))
  .catch(next);
})

// delete category : allowed for just admins
router.delete('/:categoryId', (req, res, next) => {
  Category.destroy({where: {id: req.params.categoryId}}, {include: [Product]})
  .then(() =>  res.sendStatus(204))
  .catch(next);
})

// edit category => allowed for just admins
router.put('/:categoryId', (req, res, next) => {
  Category.update(req.body, {
    where: {id: req.params.categoryId},
    returning: true
  }, {include: [Product]})
  .then(updatedCategory => res.status(201).json(updatedCategory))
  .catch(next)
})

// get all products that have the same category
router.get('/:categoryId/products', (req, res, next) => {
  Category.findById(req.params.categoryId, {include: [{model: Product}]})
  .then(categoryWithProducts => res.status(200).json(categoryWithProducts.products))
  .catch(next);
})
