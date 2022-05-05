const express = require('express')
const router = express.Router()

const controllers = require('../controllers/users')

router.post('/signIn', controllers.signIn)
router.post('/signUp', controllers.signUp)

module.exports = router