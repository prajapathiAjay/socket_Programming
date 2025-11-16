import mongoose from "mongoose"


const userSchema=new mongoose.Schema({

userName:String,
status:{type:String,default:"offline"}

})


const UserModel=new mongoose.Model("users",userSchema)