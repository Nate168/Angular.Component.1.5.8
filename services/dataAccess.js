(function () {

    angular.module('trMovies').factory('call', ['$http', '$q', {

        function($http, $q) {

            return {
             get:function(url){
             
             return $http.get(url);


             }  
            };
        }


    }]);


})();