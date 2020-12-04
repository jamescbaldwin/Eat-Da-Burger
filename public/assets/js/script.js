$(function () { 
    $(".devourButton").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eatBurger = $(this).data("eaten");

        var devouredBurger = {
            devoured: eatBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("burger devoured: ", eatBurger);
            location.reload();
        }
      );
    });

    $("#addBurgerForm").on("submit", function (event) {
        event.preventDefault();

        var addedBurger = {
            name: $("#newBurger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addedBurger
        }).then(function () {
            console.log("ADDED DA BURGER!");
            location.reload();
        })
    });

    $(".regurgitateButton").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var revokedBurger = $(this).data("regurgitated");

        var devouredBurger = {
            devoured: revokedBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("burger devoured: ", revokedBurger);
            location.reload();
        })
    });
});

