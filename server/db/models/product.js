const Sequelize = require('sequelize');
const db = require('../db');
const Review = require('./review');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  quantity: {
    type: Sequelize.Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  availability: { //must make hook to validate whether a product is in stock, otherwise it is set to false
    type: Sequelize.BOOLEAN,
    get() {
      return this.quantity > 0 
    },
    set(availabilityBool) {
      this.setDataValue('availability', availabilityBool)
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    // default: some_default_image_in_public_folder
  },
  photos: Sequelize.ARRAY(Sequelize.TEXT)
})

//calculates the average rating of the product
Product.prototype.calculateRating = function(product){
  Review.findAll({
    where: {
      productId: product.id
    }
  })
    .then(reviews => {
      let tot = 0;
       for (i = 0; i < reviews.length; i++) {
          tot += reviews.rating;
       }
       return tot / reviews.length;
    })
}

module.exports = Product;
