
const PostRoutes = require("./PostRoute")

const UserRoutes = require("./UserRoute")

const router = require("express").Router()

router.use("/user",UserRoutes)
router.use("/post",PostRoutes)




module.exports = router