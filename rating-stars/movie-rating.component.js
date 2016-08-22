;(function () {
  'use strict'
  var module = angular.module('trMovies')

  module.component('movieRating', {
    templateUrl: '/tr-movies/rating-stars/movie-rating.component.html',
    // It tells angular that you need to bind 
    bindings: {
      // The less sign tells angular that this is an input. Expect value
      // ">" Under value; this is for one way that bindings; This is for "=" Two way data bind
      value: '<'
    },
    transclude: true,
    controllerAs: 'model',
    controller: function () {
      var model = this
      // This is making Array
      model.$onInit = function () {
        model.entries = new Array(model.value)
      }
      // This is for when one of the value changes

      model.$onChanges = function () {
        // This will rebuild the array and keep the UI in sync with the actual movie rating
        model.entries = new Array(model.value)
      }
    }

  })
})()
