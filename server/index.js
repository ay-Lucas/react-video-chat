const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const { config } = require("dotenv");
config();
const PORT = process.env.PORT || 0;
const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: `http://localhost:${PORT}`,
		methods: ["GET", "POST", "PUT"],
	},
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
	});

	socket.on("callUser", (date) => {
		io.to(date.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
	});
	socket.on("answerCall", (data) => io.to(data.to).emit("callAccepted"), data.signal);
});
app.get("/", (req, res) => {
	res.send("server online");
});
app.listen(PORT, () => {
	console.log(`Port ${PORT} is running`);
});
