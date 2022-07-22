const sequelize = require("../config/connection")
const { User } = require("../models")

const userdata = [
    {
        username: "testuser1",
        email: "testemail1@email.com=",
        password: "testpassword1"
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true})

module.exports = seedUsers