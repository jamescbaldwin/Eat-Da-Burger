var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cbf) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cbf(result);
    });
  },

  insertOne: function(tableInput, column, cbf) {
    var colString = column.toString();
    var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + colString + "', false)";
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cbf(result);
    });
  },
  updateOne: function(tableInput, columnVal, condition, cbf) {
    var queryString = "UPDATE " + tableInput;
    queryString += ' SET devoured = true';
    queryString += ' WHERE ';
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cbf(result);
    });
  }
};

module.exports = orm;