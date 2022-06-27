const { MongoClient, ServerApiVersion } = require("mongodb");

module.exports = connectDB

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
		return client.db(process.env.DB_NAME);
	} catch (error) {
		throw error;
	}
}