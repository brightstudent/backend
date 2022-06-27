const router = require('express').Router()
const { ObjectId } = require("mongodb");

module.exports = _db => {
  db = _db
  return router
}

router.get("/favorites", async (req, res) => {
	const restaurants = await db
		.collection("restaurants")
		.find({ favored: true })
		.toArray();
	res.render("pages/favorites", {
		restaurants,
		homepage: false,
	});
});

router.post("/api/favorites", async (req, res) => {
	const saveRequest = req.body;	
	try {
		await db.collection("restaurants")
			.updateOne(
				{ _id: new ObjectId(saveRequest.favorite) },
				{ $set: { favored: true } }
			)
	} catch (e) {
		console.log(e);
	}
	res.status(204).send();
});


router.delete("/api/favorites/:id", async (req, res) => {
	try {
		await db.collection("restaurants")
			.updateOne(
				{ _id: new ObjectId(req.params.id) },
				{ $set: { favored: false } }
			)
	} catch (e) {
		console.log(e);
	}
	res.status(204).send();
});