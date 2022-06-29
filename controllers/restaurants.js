const router = require('express').Router()

let db

module.exports = _db => {
	db = _db
	return router
}

router.get("/", async (req, res) => {
	const restaurants = await db.collection("restaurants")
		.find({ favored: false }, {})
		.toArray();
	res.render("pages/index", { restaurants, homepage: true });
});

router.get("/api/restaurants", async (req, res) => {
	// this is how i get my data from a certain collection from db
	const places = await db.collection("restaurants")
		.find({ favored: false }, {})
		.toArray();
	res.json(places);
});

router.get("/restaurants/:slug", async (req, res) => {
	const result = await db
		.collection("restaurants")
		.findOne({ slug: req.params.slug }, {});
	res.render("pages/detail-page", { restaurant: result });
});