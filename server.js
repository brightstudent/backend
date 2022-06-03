const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const unsplash = require("unsplash-js");
const fetch = require("node-fetch");

// in dotenv bestand gaat alle gevoelige informatie zoals users. zo worden afgeschermd
require("dotenv").config();

// variable without value are `undefined`, which somewhat equal (not equivalent) to `null`
// null == undefined : True
// null === undefined : False
let db;

app.use(express.json());
app.use(express.static("assets"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const restaurants = await db.collection("restaurants").find({}, {}).toArray();
  res.render("pages/index", { restaurants, homepage: true });
});

app.get("/login", async (req, res) => {
  const api = unsplash.createApi({
    accessKey: process.env.UNSPLASH_KEY,
    fetch,
  });
  const splashResponse = await api.search.getPhotos({query: 'food', page: 1, perPage: 10});
  const pics = splashResponse.response.results
  const randomIndex = Math.floor(Math.random() * 43) % pics.length
  res.render("pages/login", 
    {backgroundImage: pics[randomIndex].urls.regular}
  );
});


app.get("/favorites", async (req, res) => {
  let favs = await db
    .collection("favorites")
    .find({ user: req.query.email }, { projection: { favorite: 1 } })
    .toArray();
  favs = favs.map((e) => ObjectId(e.favorite));
  const restaurants = await db
    .collection("restaurants")
    .find({ _id: { $in: favs } })
    .toArray();
  res.render("pages/favorites", {
    restaurants,
    homepage: false,
  });
});

app.get("/restaurants/:slug", async (req, res) => {
  // const result = restaurants.find((r) => r.slug == req.params.slug);
  const result = await db
    .collection("restaurants")
    .findOne({ slug: req.params.slug }, {});
  res.render("pages/detail-page", { restaurant: result });
});

app.get("/api/restaurants", async (req, res) => {
  // this is how i get my data from a certain collection from db
  const places = await db.collection("restaurants").find({}, {}).toArray();
  res.json(places);
});

app.post("/api/favorites", async (req, res) => {
  const saveRequest = req.body;
  try {
    await db.collection("favorites").insert(saveRequest);
  } catch (e) {
    console.log(e);
  }
  res.status(204).send();
});

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

// Define as last route
app.use(function (req, res, next) {
  // res.status(404).send(`that doesn't exist`);
  res.render("pages/404");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  connectDB().then(console.log(connectDB));
});

// 1. dynamic back button based on page location / slug
// 2. data is voor iedereen. dit moet users worden. als ik like kun jij nog steeds disliken
// 3. een formulier maken om een nieuwe user te aan te maken.

// input: wie ben jij? invullen daarvan slaat data op in database = new user.
