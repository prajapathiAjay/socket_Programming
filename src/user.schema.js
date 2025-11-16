import mongoose from "mongoose"


const userSchema=new mongoose.Schema({

userName:String,
email:String,
password:{tyep:String},
status:{type:String,default:"offline"}

})


const UserModel=new mongoose.Model("users",userSchema)