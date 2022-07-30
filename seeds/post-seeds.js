const sequelize = require("../config/connection")
const { Post } = require("../models")

const postData = [
    {
        title: "test title 1",
        body: "test body 1",
        user_id: "1"
    }
]

const seedPosts = () => Post.bulkCreate(postData, {individualHooks: true})

module.exports = seedPosts