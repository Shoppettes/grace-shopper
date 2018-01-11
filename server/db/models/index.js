const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Photo = require('./photo')
const db = require('../db.js')
const Review = require('./review')


User.hasMany(Order);
Order.belongsTo(User);

Product.belongsToMany(Order, {as: 'Product', through: 'OrderProducts'});

Category.belongsToMany(Product, {through: 'ProductCategories'});

Product.hasMany(Review);
Review.belongsTo(Product);

Product.hasMany(Photo);
Photo.belongsTo(Product);

module.exports = {
  Category, Order, Photo, Product, Review, User, db
}
