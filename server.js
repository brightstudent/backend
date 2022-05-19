const express = require("express");
const app = express();

// in dotenv bestand gaat alle gevoelige informatie zoals users. zo worden afgeschermd
require("dotenv").config();

const restaurants = require("./database");
const favs = {};
// mongoDB / my database ophalen
const mongo = require("mongodb");
const { MongoClient, ServerApiVersion } = require("mongodb");
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

let db = null;

app.use(express.json());
app.use(express.static("assets"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log(restaurants)
  res.render("pages/index", { restaurants, homepage: true });
});

app.get("/favorites", (req, res) => {
  res.render("pages/favorites", {
    restaurants: Object.values(favs),
    homepage: false,
  });
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  connectDB().then(console.log(connectDB));
});

app.use(function (req, res, next) {
  // res.status(404).send(`that doesn't exist`);
  res.render("pages/404");
});

async function connectDB() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}

app.get("/", async (req, res) => {
  const restaurants = await db.collection("restaurants").find({},{}).toArray();
  const name = (restaurants)
  res.render ('restaurants')
})

