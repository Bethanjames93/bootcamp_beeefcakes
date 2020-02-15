const orm = require("../config/orm");

const brewery = {
    //to view all breweries
    //to amend to show only requested breweries
    all: function(cb){
        orm.all("breweries", function(res) {
            cb(res);
        });
    }
};

module.exports = breweries;