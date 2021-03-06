// const path = require("path");

// module.exports = function(app) {
  
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
//   });
  
//   app.get("/breweries", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/brewery.html"))
//   });

//   app.get("/comments", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/comments.html"))
//   });

//   app.get("*", function(req, res) {
//     res.render("404");
//   });

// };

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
    });
  app.get("/breweries", function(req, res) {
    console.log("this is the request ", req.data);
    res.render("brewery", req.data);
  });
  app.get("/comments", function(req, res) {
    res.render("comments");
  });
  app.get("*", function(req, res) {
    res.render("404");
  });
  
  };