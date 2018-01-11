const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Photo = require('./photo')
const db = require('../db.js')
const Review = require('./review')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// User.hasOne(Cart);
User.hasMany(Order);
Product.hasMany(Category);
Product.hasMany(Review);
Review.belongsTo(Product);
Product.belongsToMany(Order, {as: 'Product', through: 'OrderProducts'});
Category.belongsToMany(Product, { through: 'ProductCategories'});
// Cart.belongsTo(User);
// Cart.hasMany(Product);
// Order.hasOne(Cart);
Order.belongsTo(User);
Photo.belongsTo(Product);

module.exports = {
  User, Product, Category, Order, Review, db
}
