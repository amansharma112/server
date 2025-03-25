const Post = require("../models/Post")


async function createPost(req, res) {
    try {
        let data = new Post(req.body)
        await data.save()
        res.send({ result: "Done", data: data })

    } catch (error) {
        console.log(error);

    }
}

async function getPost(req,res){
    try{
        let data = await Post.find().populate("author", {_id:0,username:1})
        res.send({result:"Done", data:data})
    }catch(error){
        console.log(error);
        
    }
}

async function getSinglePost(req, res) {
    try {
        let data = await Post.findOne({ slug:req.param.slug })
        console.log(data);
        
        // let data = await Post.find()
        if (data)
            console.log(data);
            
            res.send({ result: "Done", data: data })
    } catch (error) {
        console.log(error);

    }
}



module.exports = {
    createPost,
    getPost,
    getSinglePost,
}