const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Photo = require('./photo')
const db = require('../db.js')

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

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Product);
Product.belongsToMany(Order, {as: 'Product', through: 'OrderProducts'});

Product.hasMany(Category);
Category.belongsToMany(Product, { through: 'ProductCategories'});

Product.hasMany(Review);
Review.belongsTo(Product);

Product.hasMany(Photo);
Photo.belongsTo(Product);

module.exports = {
  Category, Order, Photo, Product, Review, User, db
}
