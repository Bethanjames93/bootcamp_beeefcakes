var db = require("../models");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });
  
  app.get("/breweries", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/brewery.html"))
  });

  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comments.html"))
  });

  app.get("*", function(req, res) {
    res.render("404");
  });

};
