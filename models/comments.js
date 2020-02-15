const orm = require("../config/orm");

const comment = {
    // to view all comments
    //to amend to show only requested breweries
    all: function(cb){
        orm.all("comments", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("comments", cols, vals, function(res) {
            cb(res);
        });
    }
};

module.exports = comments;