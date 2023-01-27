const express = require("express")
const router = express.Router()
const multer = require('multer')


const controllers = require("../controllers/posts")

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, 'photos')
    },
    filename : (req, file, cb) => {
        cb(null, file.filename + '-' + Date.now())
    }
})

const upload = multer({storage})

router.get("/", controllers.getPosts)
router.post("/",  controllers.createPost)
router.get("/:id", controllers.findPostById)
router.patch("/:id", controllers.updatePost)
router.get("/user/:id", controllers.findPostByUserId)

module.exports = router