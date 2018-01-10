const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/grace-shopper-testing', {
    logging: false
  }
)

require('./models')

module.exports = db
