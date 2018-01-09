const Sequelize = require('sequelize');
const db = require('../db')

const Category = db.define('category', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})
