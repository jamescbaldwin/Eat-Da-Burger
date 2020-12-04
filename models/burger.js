// Import orm.js
var orm = require("../config/orm.js");

// Call ORM functions using burger specific input for the orm
var burger = {
    selectAll: function(cbf) {
        orm.selectAll("burgers", function(response) {
            cbf(response);
        });
    },

    insertOne: function(column, cbf) {
        orm.insertOne("burgers", column, function(response) {
            cbf(response);
        });
    },

    updateOne: function(columnVal, condition, cbf) {
        orm.updateOne("burgers", columnVal, condition, function(response) {
            cbf(response);
        });
    },

    // deleteOne: function(condition, cbf) {
    //     orm.deleteOne("burgers", condition, function(response) {
    //         cbf(response);
    //     })
    // }
};

module.exports = burger;