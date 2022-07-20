const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("in api routes")
})

module.exports = router