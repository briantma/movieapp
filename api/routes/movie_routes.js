var models = require ('./../models');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/:id', function(req,res){
	var where = {where:{imdbID:req.params.id}};
	models.Movies.find(where).then(function(movie){
		console.log(movie);
		res.send(movie);
	})
	console.log("get movie by id: "+req.params.id);
});

router.get('/', function(req,res){	
	models.Movies.findAll().then(function(allMovies){
		res.send(allMovies);
	})
	console.log("get all movies");
});

module.exports = router;