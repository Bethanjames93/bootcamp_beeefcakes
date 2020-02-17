const db = require("../models");

module.exports = function(app) {
    // Get route for returning breweries of a certain city & including any associated comments
    app.get("/api/breweries/city/:city", function(req, res) {
      db.Post.findAll({
        where: {
          category: req.params.city
        },
        include: [db.Comments]
      })
        .then(function(dbBreweries) {
          res.json(dbBreweries);
        });
    });
};
