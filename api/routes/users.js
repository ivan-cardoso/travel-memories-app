const express = require('express')
const router = express.Router()

const controllers = require('../controllers/users')

router.post('/signIn', controllers.signIn)
router.post('/signUp', controllers.signUp)
router.post('/googleAuth', controllers.googleAuth)
router.get('/allUsers', controllers.allUsers)

module.exports = router