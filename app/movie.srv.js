(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http) {
        var self = this;
        //In a real application this would be loaded from a server
        self.getMovies = getMovies;
        self.getMovie = getMovie;

        function getMovies(){
          return $http.get('/api/movie')
              .then(function(res){
                return res;  
              })
        };

        function getMovie(id){
          return $http.get('/api/movie/'+id)
              .then(function(res){
                return res;
              })
        };

    }

})();
