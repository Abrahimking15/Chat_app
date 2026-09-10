import "dotenv/config";
import express from "express";
import User from "./models/user.model.js";
import connectdb from "./lib/db.js";

const app = express();

app.listen(3000, () => {
    connectdb();
    console.log("Server is up and running on port 3000");
});
