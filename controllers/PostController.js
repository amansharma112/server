const Post = require("../models/Post")
const jwt = require("jsonwebtoken")


async function createPost(req, res) {
    try {
        let token = req.headers.authorization
        let decode = jwt.verify(token, process.env.JWT_SECRET_KEY_USER)
        let author = decode.finaldata.username
        console.log(author);
        
        console.log(decode);
        

        let data = new Post(req.body)
        data.author=author
        console.log(data);
        await data.save()
        
        res.send({ result: "Done", data: data })

    } catch (error) {
        console.log(error);

    }
}

async function getPost(req, res) {
    try {
        let data = await Post.find().populate("author", { _id: 0, username: 1 })
        res.status(200).send({ result: "Done", data: data })
    } catch (error) {
        console.log(error);

    }
}

async function getSinglePost(req, res) {
    try {
        let data = await Post.findOne({ slug: req.params.slug })
        if (data)
            console.log(data);

        res.status(200).send({ result: "Done", data: data })
    } catch (error) {
        console.log(error);

    }
}



module.exports = {
    createPost,
    getPost,
    getSinglePost,
}