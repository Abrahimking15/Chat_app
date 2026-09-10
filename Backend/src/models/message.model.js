import mongoose, { mongo } from "mongoose";
const messageSchema= new mongoose.Schema({
    senderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,

    },
    receiverdID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,

    },
    text:{
        type: String ,
    },
    image:{
        type: String ,
    },
    video:{
        type: String ,
    },
},{timestamps:true})
const Message=mongoose.model("Message",messageSchema)
export default Message