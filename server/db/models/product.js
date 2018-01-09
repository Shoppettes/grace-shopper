const Sequelize = require('sequelize');
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    // default: some_default_image_in_public_folder
  },
  reviews: Sequelize.ARRAY(Sequelize.TEXT)
})

module.exports = Product;
