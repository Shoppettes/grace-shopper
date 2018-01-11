const Sequelize = require('sequelize')
const db = require('../db');

const Photo = db.define('photo', {
    imgUrl: {
        type: Sequelize.STRING,
        isUrl: true
    }
})

module.exports = Photo;

