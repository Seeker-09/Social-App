const router = require("express").Router();

router.use("/", (req, res) => {
    res.send("hello")
})

module.exports = router