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

    $(".regergitateButton").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eatBurger = $(this).data("eaten");

        var devouredBurger = {
            devoured: false
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("burger devoured: ", eatBurger);
            location.reload();
        })
    });

    // $(".delete").on("click", function(event) {
	// 	var id = $(this).data("id");

	//     $.ajax("/api/burgers/" + id, {
	//     	type: "DELETE",
	//     }).then(
	//     function() {
	//     	console.log("deleted burger", id);
	//         location.reload();
	//     }
	//     );
	// });
});

