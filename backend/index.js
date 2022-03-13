const express = require("express");
const app = express();
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io");
const { copyFileSync } = require("fs");
//require('dotenv').config();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
    }
})



io.on("connect", (socket) => {
    console.log(socket.id)

    socket.on("disconnect", () => {
        console.log(`client disconnected ${socket.id}`)
    })

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`user joined with socket id ${socket.id}, for room ${data}`)
    })

    socket.on("send", (data) => {
        console.log(data);
        socket.to(data.room).emit("get_message", data)
    })
})


server.listen(process.env.PORT||3005, () => {
    console.log("Server is running")
})