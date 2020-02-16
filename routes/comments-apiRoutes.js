const db = require("../models");

module.exports = function (app) {
    // POST route for saving a new comment
    //content of the comment will come from the req.body of the api post
    app.post("/api/comments", function (req, res) {
        db.Comments.create(req.body).then(function (dbComments) {
            res.json(dbComments);
        });
    });

}