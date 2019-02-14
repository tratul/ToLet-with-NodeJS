var express = require('express');
//var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('home/create');
});

router.get('/login', function(request, response){
	response.render('home/create');
});

router.post('/', function(request, response){

	var user = {
		username : request.body.username,
		password : request.body.password
	};
	//response.redirect('/home');

	userModel.validate(user, function(status){
		if(status== 'renter'){
			request.session.un = request.body.username;
			request.session.pass = request.body.password;
			//if(x == 'renter')
			response.redirect('/home');
			/*else {
				response.redirect('/reg');

			*/
		}else if(status== 'admin'){
			request.session.un = request.body.username;
			request.session.pass = request.body.password;
			response.redirect('/ahome');
		}else if(status== 'owner'){
			request.session.un = request.body.username;
			request.session.pass = request.body.password;
			response.redirect('/ohome');
		}
		else {
			response.redirect('/login');

		}
	});

});

module.exports = router;
