const router = require("express").Router();
const passport = require("passport");
const { config } = require("dotenv");
config();
const CLIENT_URL = process.env.CLIENT_URL;

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successful",
			user: req.user,
			//   cookies: req.cookies
		});
		console.log("login successful");
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

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);
module.exports = router;
