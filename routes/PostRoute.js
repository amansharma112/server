const { verifyUser } = require("../aothentication")
const { createPost, getPost, getSinglePost } = require("../controllers/PostController")


const PostRoutes = require("express").Router()



PostRoutes.post("/",verifyUser ,createPost)
PostRoutes.get("/",verifyUser ,getPost)
PostRoutes.get("/:slug",verifyUser ,getSinglePost)


module.exports =  PostRoutes