const User = require("../models/User")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

async function createUser(req, res) {
    let data = new User(req.body)
    bcrypt.hash(req.body.password, 12, async (error, hash) => {
        if (error) {
            console.log(error);
            res.status(500).send({result:"Fail", error:"Internal Server Error"})

        }
        else {
            try {
                data.password = hash
                await data.save()
                res.status(200).send({ result: "Done", data: data })
            }
            catch (error) {
                console.log(error);

            }
        }

    })

}


// async function getUser(req, res) {
//     try {
//         let data = await User.findOne({ username: req.params.username })
//         if (data)
//             res.status(200).send({ result: "Done", data: data })
//         else
//             res.status(401).sent({ result: "fail", error: error })
//     } catch (error) {
//         console.log(error);

//     }
// }



async function getUser(req, res) {
    try {
        let data = await User.findOne({ username: req.params.username })
        if (data)
            res.status(200).send({ result: "Done", data: data })
        else
            res.status(500).send({ result: "fail", error: "data not found" })
    } catch (error) {
        console.log(error);

    }
}


// async function inLogin(req, res) {
//     try {
//         let data = await User.findOne({ email: req.body.email })
//         if (data) {

//             let finaldata = {
//                 id: data.id,
//                 email: data.email,
//                 username: data.username
//             }
//             if (await bcrypt.compare(req.body.password, data.password)) {
//                 let key = process.env.JWT_SECRET_KEY_USER
//                 jwt.sign({ finaldata }, key, { expiresIn: 60 * 60 * 24 * 2 }, (error, token) => {
//                     if (error) {
//                         res.status(401).send({ result: "Fail", error: "Internal server error" })
//                     }
//                     else
//                         res.status(200).send({ result: "Done", data: finaldata, token: token })


//                 })


//             }
//             else {
//                 res.send({ result: "Fail", message: "Invalid Id Password" })
//             }
//         }

//     } catch (error) {
//         console.log(error);

//     }
// }


async function inLogin(req, res) {
    try {
        let data = await User.findOne({ email: req.body.email })
        if (!data) {
            res.status(401).send({ result: "Fail", error: "Data not found" })
        }

        let finaldata = {
            id: data.id,
            email: data.email,
            username: data.username
        }

        let isValidPass = await bcrypt.compare(req.body.password, data.password)

        if (!isValidPass) {
            res.status(401).send({ result: "Fail", error: "Invalid Password" })

        }

        let key = process.env.JWT_SECRET_KEY_USER
        jwt.sign({ finaldata }, key, { expiresIn: 60 * 60 * 24 * 2 }, (error, token) => {
            if (error) {
                res.status(500).send({ result: "Fail", error: "Internal server error" })
            }
            else
                res.status(200).json({ result: "Done", data: finaldata, token: token })


        })


    } catch (error) {
        console.log(error);

    }
}


module.exports = {
    createUser,
    getUser,
    inLogin
}