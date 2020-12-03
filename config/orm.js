var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, cols, vals], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, cols, updatedValue, id, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table, cols, updatedValue, id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;