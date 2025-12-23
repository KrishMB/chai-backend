// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";




connectDB()

/*
import express from "express"
const app=express()
(async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error:", error);
            throw error
        })
    } catch(error){
        console.error("ERROR", error)
        throw error
    }
})();
*/