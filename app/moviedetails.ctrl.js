(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl($location, movieSrv, movie) {
		var moviedVm = this;
		moviedVm.movieSrv = movieSrv;
		moviedVm.id = $location.url().slice(8);

		moviedVm.movie = movie.data;
	  	/*TODO #4: Load the movie from the movieService using the id form the route params*/

	}
})();


