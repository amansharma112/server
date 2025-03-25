const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Mendatory"]
    },
    username: {
        type: String,
        unique: true,
        required: [true, "Name is Mendatory"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Emain in Mendatory"]
    },
    phone: {
        type: Number,
        unique: true,
        required: [true, "Phone Number in Mandatory"]

    },

    password: {
        type: String,
        required: [true, "Passwore is Mandatory"]
    },
    bio: {
        type: String,
        required: [true, "Bio is Mandatory"]
    }
})

const User = new mongoose.model("User", UserSchema)

module.exports = User