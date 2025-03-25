const { verifyUser } = require("../aothentication")
const { createUser, getUser, inLogin } = require("../controllers/UserController")

const UserRoutes = require("express").Router()

UserRoutes.post("/",createUser)
UserRoutes.get("/:username",verifyUser ,getUser)
UserRoutes.post("/login", inLogin)

module.exports =  UserRoutes