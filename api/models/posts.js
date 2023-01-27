const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    "title" : String, //String is shorthand for {type : String}
    "message" : String,
    "creatorId" : String,
    "tags" : [String],
    // "selectedFile" : {
    //     data : Buffer,
    //     contentType : String
    // },
    "selectedFile": String,
    "createdAt" : {
        type : Date,
        default : new Date()
    }
})

const Posts = mongoose.model("Posts", postSchema)

module.exports = Posts


// {
//     "title" : "Travel to Rome",
//     "message" : "Great Experience",
//     "creatorId" : "63cab7287daab37974d5ad6c",
//     "tags" : ["italy", "roma", "food"],
//     "selectedFile" : ""
// }