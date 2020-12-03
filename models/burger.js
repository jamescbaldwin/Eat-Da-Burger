// Import orm.js
var orm = require("../config/orm.js");

// Call ORM functions using burger specific input for the orm
var burger = {
    selectAll: function(cbf) {
        orm.selectAll("burgers", function(res) {
            cbf(res);
        });
    },

    insertOne: function(column, cbf) {
        orm.insertOne("burgers", column, function(res) {
            cbf(res);
        });
    },

    updateOne: function(columnVal, condition, cbf) {
        orm.updateOne("burgers", columnVal, condition, function(res) {
            cbf(res);
        });
    }
};

module.exports = burger;