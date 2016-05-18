(function(){
	angular
		.module('coderMdb')
		.controller('MovieListCtrl', MovieListCtrl);

	function MovieListCtrl(movieSrv, movies) {
		console.log(movies.data);
		var movielVm = this;
	  	movielVm.movieSrv = movieSrv;
	  	movielVm.option = "";
	  	movielVm.movies = movies.data;


	  	movielVm.sortOptions = [
		    {label: 'Title', sortField: 'Title', reverse: false},
		    {label: 'Rating', sortField: "imdbRating", reverse: true}
		]
	  
	  	movielVm.curPage = 0;
	  	movielVm.moviesPerPage = 4;
	  	movielVm.filteredMovies = movielVm.movies;
	  	movielVm.zero = zero;
	  	movielVm.pageMove = pageMove;
	  	movielVm.findPage = findPage;
	  	movielVm.findPage();
	  	

	  	function pageMove(x){
	  		console.log("old: "+movielVm.curPage);
	  		movielVm.curPage += x;
	  		console.log("new: "+movielVm.curPage);
	  	}

	  	function findPage(){
	  		return Math.ceil(movielVm.filteredMovies.length/movielVm.moviesPerPage);
	  	}

	  	function zero(){
	  		movielVm.curPage = 0;
	  	}


	}
})();
