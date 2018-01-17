const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Order = require('./order')
const Photo = require('./photo')
const db = require('../db.js')
const Review = require('./review')
const OrderProduct = require('./orderProduct')
const ProductCategory = require('./productCategory')

//one to many : user to order
User.hasMany(Order);
Order.belongsTo(User);

//many to many
Order.belongsToMany(Product, {through: OrderProduct});
Product.belongsToMany(Order, {through: OrderProduct});

//many to many
Product.belongsToMany(Category, {through: ProductCategory});
Category.belongsToMany(Product, {through: ProductCategory});

//one to many: product to review
Product.hasMany(Review);
Review.belongsTo(Product);

//one to many: product to photo
Product.hasMany(Photo);
Photo.belongsTo(Product);

module.exports = {
Category, Order, Photo, Product, Review, User, OrderProduct, ProductCategory, db
}
