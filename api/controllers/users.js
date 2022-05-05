const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../models/index')

const signIn = (req, res) => {

}

const signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await User.findOne({email})
        if (user) return res.status(400).json({ 'message': 'User already exist' })

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            "name" : name,
            "email" : email,
            "password": hashedPassword
        })

        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { signIn, signUp }