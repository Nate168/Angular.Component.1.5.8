(function () {
    "use strict";

    var module = angular.module("trMovies");


    function controller(call) {
        var model = this;



        model.$onInit = function () {
            var url = '\movies.json';

            call.get(url)
                .then(function (response) {
                    model.movies = response.data;
                    console.log(model.movies);
                })


        }
        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        }

    };

    ;

    module.component('movieList', {
        templateUrl: "/tr-movies/movie-component.html",
        controllerAs: "model",
        //Anotation
        controller: ["$http", controller]




    });
})();

