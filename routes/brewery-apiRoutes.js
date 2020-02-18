const db = require("../models");

module.exports = function(app) {
    // Get route for returning all breweries of a certain city & including any associated comments
    app.get("/api/breweries/city/:city", function(req, res) {
      db.Breweries.findAll({
        where: {
          city: req.params.city
        }
      })
        .then(function(dbBreweries) {
          res.json(dbBreweries);
        });
    });

    // Get route for returning all comments associated with a brewery
    app.get("/api/breweries/brewery_name/:brewery_name", function(req, res) {
      db.Breweries.findAll({
        where: {
          brewery_name: req.params.brewery_name
        },
        include: [db.Comments]
      })
        .then(function(dbBreweries) {
          res.json(dbBreweries);
        });
    });
};
