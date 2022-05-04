const express = require("express")
const router = express.Router()

const controllers = require("../controllers/posts")

router.get("/", controllers.getPosts)
router.post("/", controllers.createPost)
router.get("/:id", controllers.findPostById)
router.put("/:id", controllers.updatePost)

module.exports = router