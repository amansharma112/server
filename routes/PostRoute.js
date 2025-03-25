const { createPost, getPost, getSinglePost } = require("../controllers/PostController")


const PostRoutes = require("express").Router()



PostRoutes.post("/",createPost)
PostRoutes.get("/",getPost)
PostRoutes.get("/:slug",getSinglePost)


module.exports =  PostRoutes