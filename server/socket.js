const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
require("dotenv").config();
const PORT = 5000;
const socket = () => {
	const io = require("socket.io")(server, {
		cors: {
			origin: process.env.CLIENT_URL,
			methods: ["GET, POST, PUT"],
		},
	});

	server.listen(5000, () => {
		console.log(`Port ${PORT} is running`);
	});
	io.on("connection", (socket) => {
		socket.emit("me", socket.id);

		socket.on("disconnect", () => {
			socket.broadcast.emit("callEnded");
		});

		socket.on("callUser", ({ userToCall, signalData, from, name }) => {
			io.to(userToCall).emit("callUser", { signal: signalData, from, name });
		});

		socket.on("answerCall", (data) => {
			io.to(data.to).emit("callAccepted", data.signal);
		});
	});
};
module.exports = socket();
