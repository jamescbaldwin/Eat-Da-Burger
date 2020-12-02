// Import orm.js
var orm = require("../config/orm.js");

// Call ORM functions using burger specific input for the orm
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(cols, updatedValue, id, cb) {
        orm.updateOne("burgers", "devoured", updatedValue, id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;