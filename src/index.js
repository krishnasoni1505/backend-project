// require('dotenv').config({path: './env'});
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()






// import express from "express";

// ( async () =>{
//     try {
//         await mongoose.connect(`$(process.env.MONGO_URI)/${DB_NAME}`)
//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error
//     }
// }) ()