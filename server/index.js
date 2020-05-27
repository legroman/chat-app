const express = require("express");
const socket_io = require("socket.io");
const http = require("http");

const port = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socket_io(server);

io.on("connection", socket => {
   console.log("We have a new connection!");

   socket.on("join", ({name, room}, callback) => console.log(name, room));

   socket.on("disconnect", () => console.log("User had left!"))
});

app.use(router);

server.listen(port, () => console.log(`server has been started on port ${port}`));