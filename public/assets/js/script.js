$(document).ready(function () { 
    $(".devourButton").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");

        $.ajax({url: "/api/burgers/" + id, methos: "PUT"}
        .then)(function (data) {
            console.log(data);
            location.reload();
        });
    });

    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        var addedBurger = {name: $("#newBurger").val().trim()};

        $.ajax("/api/burgers", {
            type: "POST",
            data: addedBurger
        }).then(function () {
            console.log("ADDED DA BURGER!");
            location.reload();
        })
    })
});

