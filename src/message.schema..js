import mongoose from "mongoose"


const messageSchema=new mongoose.Schema({

    username:String,
    message:String,
    roomId:String,
    time:{type:Date,default:Date.now}




})
export const MessageModel=new mongoose.model("Message",messageSchema)