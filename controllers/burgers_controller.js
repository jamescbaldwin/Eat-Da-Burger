var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);
    burger.updateOne(
        {
          devoured: req.body.devoured
        },
        condition, 
        function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            res.status(200).end();
            console.log("UPDATE SUCCESSFUL!");
        }
    );
});

module.exports = router;