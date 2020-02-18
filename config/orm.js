// const connection = require("../config/connection.js");

// const orm = {
//     // function to get all 
//     all: function(tableInput, cb){
//         let queryString = "SELECT * FROM " + tableInput + ";";
//         connection.query(queryString, function(err, result){
//             if (err){
//                 throw err;
//             }
//             cb(result);
//         });
//     },

//     create: function(table, col, vals, cd){
//         let queryString = "INSERT INTO " + table;
//         queryString += " (";
//         queryString += col.toString();
//         queryString += ") ";
//         queryString += "VALUE (";
//         queryString += 
//     }
//     }
// }