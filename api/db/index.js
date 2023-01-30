const mongoose = require("mongoose")
require('dotenv').config()

const URI = `mongodb+srv://travel-momories-app:${process.env.URI_PASSWORD}@cluster0.bcrsa.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to the Cluster"))
    .catch((err) => console.log("ERROR CONNECTING TO THE CLUSTER", err))


module.exports = mongoose