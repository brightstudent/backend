const express = require("express");
const app = express();
const port = 3000;

require('dotenv').config()

const restaurants = require("./database");
const favs = {};
app.use(express.json());
app.use(express.static("assets"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log(restaurants)
  res.render("pages/index", { restaurants, homepage: true } );
});

app.get("/favorites", (req, res) => {
  res.render("pages/favorites", { restaurants: Object.values(favs), homepage: false });
; 
});

app.get("/restaurants/:slug", (req, res) => {
  const result = restaurants.find((r) => r.slug == req.params.slug);
  res.render("pages/detail-page", { restaurant: result });
});

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

app.post("/api/favorites", (req, res) => {
  // TODO: save favorites
  const restaurant = req.body;
  favs[restaurant.name] = restaurant;
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(function (req, res, next) {
  // res.status(404).send(`that doesn't exist`);
  res.render("pages/404");
});
