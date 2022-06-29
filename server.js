const express = require("express");
const app = express();

// in dotenv bestand gaat alle gevoelige informatie zoals users. zo worden afgeschermd.
require("dotenv").config();

app.use(express.json());
app.use(express.static("assets"));
app.set("view engine", "ejs");

app.listen(process.env.PORT, async () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
	// ('./db') roept alleen de functie op. () zijn er om die te gebruiken. 
	let db = await require('./db')();
	// in plaats van alles apart aanroepen, roepen we ./routes waar alle routes in zitten.
	require('./routes')(app, db)
});