const {Posts} = require("../models/index")

const getPosts = async (req, res) =>{
    console.log("POST", Posts)
    try {
        const posts = await Posts.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({"error" : error})
    }
}

const createPost = (req, res) =>{

}
module.exports = {getPosts, createPost}