
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
require("./db.connect")

const router = require("./routes/RootRoute")

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET, POST, ",
    credentials:true,
}
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use("/api",router)




app.listen(8000, ()=>console.log("Server is Running at http://localhost:8000"))