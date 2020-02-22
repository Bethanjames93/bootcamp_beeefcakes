const db = require("../models");

module.exports = function(app) {
    // Get route for returning all breweries of a certain city & including any associated comments
    app.get("/api/breweries/city/:city", function(req, res) {
        db.Breweries.findAll({
          raw: true,
          where: {
            city: req.params.city
          }
        })
          .then(function(Breweries) {
            res.json(Breweries);
            console.table(Breweries)
          });
      });

    // Get route for returning all comments associated with a brewery
    app.get("/api/breweries/breweryId/:breweryId", function(req, res) {
      db.Breweries.findAll({
        where: {
          id: req.params.breweryId
        },
        include: [db.Comments]
      })
        .then(function(dbBreweries) {
          res.json(dbBreweries);
        });
    });
};
