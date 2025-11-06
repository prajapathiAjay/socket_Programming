import express from "express"


const server=express();

const PORT=3000;

server.get("/",(req,res)=>{
    res.send("Hello from Express server");
})
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})