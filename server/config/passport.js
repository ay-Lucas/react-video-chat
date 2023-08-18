const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { config } = require("dotenv");
config();
// const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.GOOGLE_REDIRECT_URI,
			passReqToCallback: true,
		},
		// function (accessToken, refreshToken, profile, cb) {
		// 	User.findOrCreate({ googleId: profile.id }, function (err, user) {
		// 		return cb(err, user);
		// 	});
		// }
		async (request, accessToken, refreshToken, profile, done) => {
			try {
				let existingUser = await User.findOne({ "google.id": profile.id });
				// if user exists return the user

				if (existingUser) {
					return done(null, existingUser);
				}
				// if user does not exist create a new user
				console.log("Creating new user...");
				const newUser = new User({
					method: "google",
					google: {
						id: profile.id,
						name: profile.displayName,
						email: profile.emails[0].value,
					},
				});
				await newUser.save();
				return done(null, newUser);
			} catch (error) {
				console.log(error);
				return done(error, false);
			}
		}
	)
);
// passport.serializeUser((user, done) => {
// 	done(null, user);
// });

// passport.deserializeUser((user, done) => {
// 	done(null, user);
// });
