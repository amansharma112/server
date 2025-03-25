
const express = require("express")
const dotenv = require("dotenv").config()
require("./db.connect")

const router = require("./routes/RootRoute")

const app = express()

app.use(express.json())
app.use("/api",router)




app.listen(8000, ()=>console.log("Server is Running at http://localhost:8000"))