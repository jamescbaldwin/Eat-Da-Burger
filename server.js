var express = require("express");
var app = express();
app.use(express.static("public"));
app.use(express.json());


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var burgerController = require ("./controllers/burgers_controller.js");
app.use("/api/burgers", burgerController);

var burger = require("./models/burger.js");
app.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);


var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App is listening at localhost: " + PORT);
});