const http = require("http");
const app = require("express")();
const server = http.createServer(app);
const { config } = require("dotenv");
const cors = require("cors");
config();
const PORT = 5000;
CLIENT_SERVER = "http://localhost:5173";
// const { Server } = require("socket.io");
// const io = new Server(server, {
// 	cors: {
// 		origin: `http://localhost:${PORT}`,
// 		methods: ["GET", "POST", "PUT"],
// 	},
// });
function errorHandler(err, req, res, next) {
	if (err) {
		res.send("<h1>There has been an error, please try again</h1>");
	}
}
const io = require("socket.io")(server, {
	cors: {
		origin: CLIENT_SERVER,
		methods: ["GET, POST, PUT"],
	},
});

app.use(cors({ origin: process.env.GOOGLE_JAVASCRIPT_ORIGIN, methods: "GET,HEAD,PUT,PATCH,POST,DELETE", credentials: true }));
app.get("/", (req, res) => {
	res.send(`Server ${PORT} is running`);
});
io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded");
	});

	// socket.on("callUser", (data) => {
	// 	io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
	// });
	socket.on("calluser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("calluser", { signal: signalData, from, name });
	});

	socket.on("answercall", (data) => io.to(data.to).emit("callaccepted"), data.signal);
});
app.use(errorHandler);

server.listen(PORT, () => {
	console.log(`Port ${PORT} is running`);
});
