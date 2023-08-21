const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = process.env.PORT || 0;
const authRoute = require("./routes/auth");
const db = require("./config/database");
const socket = require("./socket.js");
require("./config/passport");
// const MongoStore = require("connect-mongo")(session);
const CLIENT_URL = process.env.CLIENT_URL;
db.connect();

function errorHandler(err, req, res, next) {
	if (err) {
		res.send("<h1>There has been an error, please try again</h1>");
	}
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ name: "session", keys: ["easychatsession"], maxAge: 24 * 60 * 60 * 100 }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ origin: process.env.GOOGLE_JAVASCRIPT_ORIGIN, methods: "GET,HEAD,PUT,PATCH,POST,DELETE", credentials: true }));
app.use("/auth", authRoute);
app.use(errorHandler);

app.get("/", (req, res) => {
	res.send("server online");
});

socket;

app.listen(PORT, () => {
	console.log(`Port ${PORT} is running`);
});
