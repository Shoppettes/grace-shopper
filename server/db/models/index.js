const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Cart = require('./cart')
const Order = require('./order')
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
Product.hasMany(Order);
Category.hasMany(Product);
Cart.hasOne(User);
Cart.hasMany(Product);
Order.hasOne(Cart);
Order.hasOne(User);


module.exports = {
  User
}
