const Sequelize = require('sequelize')
const db = require('../db');

const Photo = db.define('photo', {
    imgURL: {
        type: Sequelize.STRING,
        isUrl: true
    }
})

module.exports = Photo;

