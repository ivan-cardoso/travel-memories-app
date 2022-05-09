const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('../models/index')

const signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) return res.status(400).json({ 'message': 'Invalid inputs' })

        const user = await User.findOne({email})
        if(!user) return res.status(404).json({ "message": "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(!isPasswordCorrect) return res.status(401).json({'message' : 'Bad credentials'})

        const token = jwt.sign({"email" : user.email, "id" : user._id}, 'TEST', {"expiresIn" : '1h'})
        
        res.status(200).json({user, token})
    } catch (error) {
        res.status(500).json(error)
    }
}

const signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) return res.status(400).json({ 'message': 'Invalid inputs' })

        const user = await User.findOne({ email })
        if (user) return res.status(401).json({ 'message': 'User already exist' })

        const hashedPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            "name": name,
            "email": email,
            "password": hashedPassword
        })

        const token = jwt.sign({ "email": newUser.email, "id": newUser._id }, 'TEST', { "expiresIn": "1h" })

        res.status(201).json({ newUser, token })

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { signIn, signUp }