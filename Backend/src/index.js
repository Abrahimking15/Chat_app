import "dotenv/config";
import express from "express";
import User from "./models/user.model.js";
import connectdb from "./lib/db.js";
import {clerkMiddleware} from '@clerk/express'
import cors from "cors"

const app = express();
const FRONTEND_URL=process.env.FRONTEND_URL;
app.use(clerkMiddleware())
app.use(cors({origin:FRONTEND_URL,credentials:true}))
app.use(express.json())
app.get("/health",(req,res)=>{
    
    res.status(200).json({ok:true});
});

app.listen(3000, () => {
    connectdb();
    console.log("Server is up and running on port 3000");
});
