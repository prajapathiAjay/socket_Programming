import express from "express"
import { Server } from "socket.io";
import http from "http";

const app = express();

//1. creating http server (we need to create http server to integrate socket.io with express because socket.io works with http server)
const server = http.createServer(app);

// 2. creating socket.io server
const io = new Server(server, { cors: { origin: "*", methods: ["GET", "POST"] } });

// 3. using socket event to establish connection


io.on("connection", (socket) => {
    console.log(`User connected:`);
    socket.on("join",(data)=>{
        socket.userName=data
    })
// listening for message from client
socket.on("new_message",(message)=>{
    console.log(`Message received: ${message}`);

    let userMessage={
        userName:socket.userName,
        message:message
    }
    // broadcasting message to all other clients except sender
    socket.broadcast.emit("broadcast_message",userMessage)

})

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    })

})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
