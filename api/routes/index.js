const express = require("express")
const router = express.Router()
const userRoutes = require("./users")
const postsRoutes = require("./posts")

router.use("/user", userRoutes)
router.use("/posts", postsRoutes)

module.exports = router