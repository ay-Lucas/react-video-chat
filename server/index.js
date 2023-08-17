const http = require("http");
const { Server } = require("socket.io");
const passportSetup = require("./passport");

const express = require("express");
const app = express();
const server = http.createServer(app);

const cors = require("cors");
const { config } = require("dotenv");
config();

const cookieSession = require("cookie-session");
const passport = require("passport");

const PORT = process.env.PORT || 0;
const authRoute = require("./routes/auth");

app.use(cookieSession({ name: "session", keys: ["easychatsession"], maxAge: 24 * 60 * 60 * 100 }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: process.env.JAVASCRIPT_ORIGIN, methods: ["GET", "POST"], credentials: true }));
app.use("/auth", authRoute);

app.listen(PORT, () => {
	console.log(`Port ${PORT} is running`);
});
// const io = new Server(server, {
// 	cors: {
// 		origin: `http://localhost:${PORT}`,
// 		methods: ["GET", "POST", "PUT"],
// 	},
// });

// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id);

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded");
// 	});

// 	socket.on("callUser", (date) => {
// 		io.to(date.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
// 	});
// 	socket.on("answerCall", (data) => io.to(data.to).emit("callAccepted"), data.signal);
// });
// app.get("/", (req, res) => {
// 	res.send("server online");
// });
