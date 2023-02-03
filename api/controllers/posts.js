const { default: mongoose } = require("mongoose")
const { Posts } = require("../models/index")
const fs = require('fs')
const path = require('path');


const getPosts = async (req, res) => {
    console.log("POST", Posts)
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ "error": error })
    }
}

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new Posts(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (err) {
        res.status(404).json({ "ERR": err })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const body = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Id valid") // Verify if is a valid ID
    try {
        const postUpdate = await Posts.findByIdAndUpdate(_id, body, { new: true })
        res.status(201).send(postUpdate)
    } catch (error) {
        res.status(500).send({ "ERR": error })
    }
}

const findPostById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Id valid')
    try {
        const post = await Posts.findById(id).exec()
        res.status(200).send(post)
    } catch (error) {
        res.sendStatus(500)
    }
}

const findPostByUserId = async (req, res) => {
    const { id } = req.params
    //  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Id valid')
    try {
        const posts = await Posts.find({ 'creatorId': id })
        res.status(200).send(posts)
    } catch (err) {
        res.status(500).json({ 'ERR': err })
    }
}


module.exports = { getPosts, createPost, updatePost, findPostById, findPostByUserId }