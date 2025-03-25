const jwt = require("jsonwebtoken")

function verifyUser(req, res, next) {
    let token = req.headers.authorization
    // console.log(token);
    
    jwt.verify(token, process.env.JWT_SECRET_KEY_USER, (error) => {
        if (error)
            res.send({ result: "Fail", error: "Token verifiction Fail. Log in again" })
        else
            next()

    })
    

}

module.exports = {
    verifyUser,
}