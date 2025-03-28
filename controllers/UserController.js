const User = require("../models/User")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

async function createUser(req, res) {
    let data = new User(req.body)
    bcrypt.hash(req.body.password, 12, async (error, hash) => {
        if (error) {
            console.log(error);

        }
        else {
            try {
                data.password = hash
                await data.save()
                res.send({ result: "Done", data: data })
            }
            catch (error) {
                console.log(error);

            }
        }

    })

}


async function getUser(req, res) {
    try {
        let data = await User.findOne({ username: req.params.username })
        if (data)
            res.send({ result: "Done", data: data })
    } catch (error) {
        console.log(error);

    }
}


async function inLogin(req, res) {
    try {
        let data = await User.findOne({ email: req.body.email })
        if (data) {
            
            let finaldata = [data._id, data.email, data.username]
            if (await bcrypt.compare(req.body.password,data.password)) {
                let key = process.env.JWT_SECRET_KEY_USER
                jwt.sign({ finaldata }, key, { expiresIn: 60 * 60 * 24 * 2 }, (error, token) => {
                    if (error) {
                        res.send({ result: "Fail", error: "Internal server error" })
                    }
                    else
                        res.send({ result: "Done", data: finaldata, token: token })
                    console.log(finaldata);
                    
                })
                // res.send({ result: "Done", data: data })

            }
            else {
                res.send({ result: "Fail", message: "Invalid Id Password" })
            }
        }

    } catch (error) {
        console.log(error);

    }
}


module.exports = {
    createUser,
    getUser,
    inLogin
}