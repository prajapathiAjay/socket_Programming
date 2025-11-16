import mongoose from "mongoose"

const roomSchema=new mongoose.Schema({
roomId:String,
members:[String]
})

export const Room=new mongoose.Model("Room",roomSchema)