const Sequelize = require('sequelize');
const db = require('../db');

const productCategories = db.define('ProductCategories', {
  productId: Sequelize.INTEGER,
  categoryId: Sequelize.INTEGER
})

module.exports = productCategories
