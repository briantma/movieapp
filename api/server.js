var express = require('express');
var models = require('./models');
var app = express();
var port = 80;

var movie_routes = require('./routes/movie_routes');
var init_route = require('./routes/init_route');

app.use('/api/movie', movie_routes);
app.use('/api/dataupload', init_route);

app.use(express.static(__dirname + './../app/'));

models.sequelize.sync().then(function(){
	app.listen(port, function(){
		console.log('Listening on http://localhost:%s', port);
		console.log('Stop Server with CTRL + C');
	});
});