const express = require("express");
const socket_io = require("socket.io");
const http = require("http");

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socket_io(server);

server.listen(port, () => console.log(`server has been started on port ${port}`));