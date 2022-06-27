const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

// in dotenv bestand gaat alle gevoelige informatie zoals users. zo worden afgeschermd.
require("dotenv").config();

let db;

app.use(express.json());
app.use(express.static("assets"));
app.set("view engine", "ejs");

async function connectDB() {
	try {
		// mongoDB / my database ophalen
		const uri =
			"mongodb+srv://" +
			process.env.DB_USERNAME +
			":" +
			process.env.DB_PASS +
			"@" +
			process.env.DB_HOST +
			"/" +
			process.env.DB_NAME +
			"?retryWrites=true&w=majority";
		const client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1,
		});
		await client.connect();
		db = client.db(process.env.DB_NAME);
	} catch (error) {
		throw error;
	}
}

app.listen(process.env.PORT, async () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
	await connectDB()
	require('./routes')(app, db)
});