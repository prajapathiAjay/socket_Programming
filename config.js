import mongoose from 'mongoose';

export const connectDB=async()=>{

try {
    await mongoose.connect("mongodb://localhost:27017/socketDB",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("MongoDB connected successfully");



} catch (error) {
    console.log("MongoDB connection failed:",error.message);
}



}