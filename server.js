const express = require("express");
const app = express();

// in dotenv bestand gaat alle gevoelige informatie zoals users. zo worden afgeschermd.
require("dotenv").config();

app.use(express.json());
app.use(express.static("assets"));
app.set("view engine", "ejs");

app.listen(process.env.PORT, async () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
	let db = await require('./db')();
	require('./routes')(app, db)
});