const uuidv4 = require("uuid").v4;
const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("dotenv");
config();
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = process.env.PORT || 0;
const authRoute = require("./routes/auth");
const db = require("./config/database");
const session = require("express-session");
require("./config/passport");
// require("./socket.js");
// const MongoStore = require("connect-mongo")(session);
const http = require("http");
const server = http.createServer(app);
CLIENT_SERVER = "http://localhost:5173";
db.connect();

function errorHandler(err, req, res, next) {
	if (err) {
		res.send("<h1>There has been an error, please try again</h1>");
	}
}
const io = require("socket.io")(server, {
	cors: {
		origin: process.env.GOOGLE_JAVASCRIPT_ORIGIN,
		methods: ["GET, POST, PUT"],
	},
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: true }));
app.use(cookieSession({ name: "session", keys: ["easychatsession"], maxAge: 24 * 60 * 60 * 100 }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: process.env.GOOGLE_JAVASCRIPT_ORIGIN, methods: "GET,HEAD,PUT,PATCH,POST,DELETE", credentials: true }));
app.use("/auth", authRoute);

app.use(errorHandler);

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
app.listen(PORT, () => {
	console.log(`Port ${PORT} is running`);
});
server.listen(5000, () => {
	console.log("server running at 5000");
});
app.get("/", (req, res) => {
	res.send("server online");
});
