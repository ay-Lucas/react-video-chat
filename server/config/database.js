const { MongoClient, ServerApiVersion } = require("mongodb");

const { config } = require("dotenv");
config();
/**
 * Connect to MongoDB Atlas Server
 **/
const dbUrl = process.env.DB_STRING;
// const client = new MongoClient(conn, {
// 	serverApi: {
// 		version: ServerApiVersion.v1,
// 		strict: true,
// 		deprecationErrors: true,
// 	},
// });
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const connect = async () => {
	mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
	const db = mongoose.connection;
	db.on("error", () => {
		console.log("could not connect");
	});
	db.once("open", () => {
		console.log("> Successfully connected to database");
	});
};
module.exports = { connect };

// async function run() {
// 	try {
// 		// Connect the client to the server	(optional starting in v4.7)
// 		// await client.connect();
// 		// Send a ping to confirm a successful connection
// 		await client.db("cluster0").command({ ping: 1 });
// 		console.log("Pinged your deployment. You successfully connected to MongoDB!");

// 	} finally {
// 		// Ensures that the client will close when you finish/error
// 		await client.close();
// 	}
// }
// run().catch(console.dir);
// Expose the connection
