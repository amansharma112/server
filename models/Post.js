// const mongoose = require("mongoose")


// const PostSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, "Title is Mandetory"]
//     },
//     slug: {
//         type: String,
//     },
//     description: {
//         type: String
//     },
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Post",
//         required: [true, "Author is Mandatory"]
//     }
// })


// const Post = new mongoose.model("Post", PostSchema)

// module.exports = Post



const mongoose = require("mongoose")


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is Mendatory"]
    },
    slug: {
        type: String,
        unique: true,
        required: [true, "slug is Mendatory"]
    },
    description: {
        type: String,
        unique: true,
        required: [true, "Emain in Mendatory"]
    },
    author: {
        type : String,
        required:[true, "author is mandetory"]
        
    

    }
})

const Post = new mongoose.model("Post", PostSchema)

module.exports = Post