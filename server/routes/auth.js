const router = require("express").Router();
const passport = require("passport");
const { config } = require("dotenv");
config();
const CLIENT_URL = "http://localhost:5173/";

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successfull",
			user: req.user,
			//   cookies: req.cookies
		});
		console.log("login successful");
		// res.json({ success: true, token: token, status: "You are successfully logged in!" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		success: false,
		message: "failure",
	});
	console.log("login failed");
});

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(CLIENT_URL);
	console.log("user logout successful");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
		failureFlash: true,
		session: true,
	})
);

module.exports = router;
