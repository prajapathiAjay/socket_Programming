
// import express from "express";
// import http from "http";
// import { Server } from "socket.io";
// import cors from "cors";

// export const app = express();
// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("Connection made.");

//   // User joins a specific room
//   socket.on("join", ({ roomId, userName }) => {
//     socket.roomId = roomId;
//     socket.userName = userName;

//     socket.join(roomId);

//     socket.emit("joinSuccess", { userName })
//     console.log(`${userName} joined room: ${roomId}`);
//     // Notify other users in the room
//     socket.to(roomId).emit("userJoined", { userName });
//   });

//   // User sends message
//   socket.on("sendMessage", ({ message }) => {
//     const roomId = socket.roomId;
//     const userName = socket.userName;
//     console.log()
//     // Broadcast to everyone in the same room
//     io.to(roomId).emit("message", { userName, message });
//   });

//   socket.on("disconnect", () => {
//     console.log("Connection disconnected.");
//   });
// });

// server.listen(3000, () => console.log("Server running on port 3000"));







import http from "http";
import app from "./app.js"
import { socketLogic } from "./src/socket/socketLogic.js";

const server = http.createServer(app);

// Initialize socket
socketLogic(server);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
