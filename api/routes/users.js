const express = require('express')
const router = express.Router()

const controllers = require('../controllers/users')

router.post('/signIn', controllers.signIn)
router.post('/signUp', controllers.signUp)
router.post('/googleSignUp', controllers.googleSignUp)
router.get('/allUsers', controllers.allUsers)

module.exports = router