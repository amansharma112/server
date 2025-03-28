const { verifyUser } = require("../aothentication")
const { createPost, getPost, getSinglePost } = require("../controllers/PostController")


const PostRoutes = require("express").Router()



PostRoutes.post("/" ,createPost)
PostRoutes.get("/:slug",verifyUser ,getSinglePost)
PostRoutes.get("/",verifyUser ,getPost)


module.exports =  PostRoutes