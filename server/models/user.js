const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
	google: {
		id: {
			type: String,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		profile_picture: {
			type: String,
		},
	},
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
