const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Cart = require('./cart')
const Order = require('./order')
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

User.hasOne(Cart);
User.hasMany(Order);
Product.hasMany(Category);
Product.belongsToMany(Order, {as: 'Product', through:'OrderProducts'});
Category.belongsToMany(Product, {as: 'Category', through: 'ProductCategories'});
Cart.belongsTo(User);
Cart.hasMany(Product);
Order.hasOne(Cart);
Order.belongsTo(User);

module.exports = {
  User, Product, Category, Cart, Order, db
}
