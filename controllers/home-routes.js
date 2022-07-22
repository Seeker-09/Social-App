const router = require("express").Router();

router.get('/', (req, res) => {
    res.send("in home routes")
})

module.exports = router