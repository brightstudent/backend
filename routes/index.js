module.exports = (app, db) => {
  const restaurantRouter = require('../controllers/restaurants')(db)
  const favoriteRouter = require('../controllers/favorites')(db)
  
  app.use('/', restaurantRouter)
  app.use('/', favoriteRouter)

  // Define as last route
  app.use(function (req, res, next) {
    // res.status(404).send(`that doesn't exist`);
    res.render("pages/404");
  });
}