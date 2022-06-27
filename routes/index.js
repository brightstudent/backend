module.exports = (app, db) => {
  app.use('/', require('../controllers/restaurants')(db))
  app.use('/', require('../controllers/favorites')(db))

  // Define as last route
  app.use(function (req, res, next) {
    // res.status(404).send(`that doesn't exist`);
    res.render("pages/404");
  });
}