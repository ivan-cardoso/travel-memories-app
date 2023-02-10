const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    "title": String, //String is shorthand for {type : String}
    "message": String,
    "creator": {
        "creatorName": String,
        "creatorId": String,
    },
    "tags": [String],
    "selectedFile": String,
    "createdAt": {
        type: Date,
        default: new Date()
    }
})

const Posts = mongoose.model("Posts", postSchema)

module.exports = Posts
