const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Photo = require('./photo')
const db = require('../db.js')
const Review = require('./review')
const OrderProduct = require('./orderProduct')

//one to many : user to order
User.hasMany(Order);
Order.belongsTo(User);

//many to many
Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});

//many to many
Category.belongsToMany(Product, {through: 'ProductCategories'});
Product.belongsToMany(Category, {through: 'ProductCategories'});

//one to many: product to review
Product.hasMany(Review);
Review.belongsTo(Product);

//one to many: product to photo
Product.hasMany(Photo);
Photo.belongsTo(Product);

module.exports = {
 Category, Order, Photo, Product, Review, User, OrderProduct, db
}
