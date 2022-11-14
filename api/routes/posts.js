const express = require("express")
const router = express.Router()

const controllers = require("../controllers/posts")

router.get("/", controllers.getPosts)
router.post("/", controllers.createPost)
router.get("/:id", controllers.findPostById)
router.patch("/:id", controllers.updatePost)
router.get("/user/:id", controllers.findPostByUserId)

module.exports = router