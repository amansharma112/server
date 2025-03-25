const mongoose = require("mongoose")

async function getConnect(){
    
    try {
        await mongoose.connect("mongodb://localhost:27017/restaurant")
        console.log("Database is connected");
    } catch (error) {
        console.log(error);
        
    }
}

getConnect()