import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkID: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        default: "",
    },
    
});
 const User=mongoose.model("User",userSchema);
 export default User;