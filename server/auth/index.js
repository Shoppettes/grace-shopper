const router = require('express').Router()

router.use('/local', require('./local'))

router.use('/google', require('./google'))

router.use('/stripe', require('./stripe'))

module.exports = router
