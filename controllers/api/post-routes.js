const router = require("express").Router()
const sequelize = require("../../config/connection")
const { Post, User } = require("../../models")


// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

// get post by id
router.get("/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })
    .then(dbPostData => {
        // check if post exists
        if(!dbPostData) {
            res.status(404).json({message: "No post found with this id"})
            return
        }
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router