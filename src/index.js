// require('dotenv').config({path: './env'});
//              OR

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path : "./env"});





connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("MONGODB Connection Failed!!", err);
})







//Below is the 1st approach
/*import express from "express";
const app = express();
//This is database connection using try/catch and iffy which basically tells to execute this fuction immediately, so there is 
// "()" this parenthesis at the end
//Also we have used async/await


;( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERR:", error);
            throw error;
        });


        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR:" , error);
        throw err
    }
})()

*/