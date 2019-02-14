var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');


//var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('home/registration');
});

router.post('/', function(request, response){
var user={
   username : request.body.username,
   password : request.body.password,
   utype : request.body.utype,
   mobile : request.body.mobile
};

if(!user.username || !user.password || !user.mobile ){
	response.redirect('/reg');
}else{
	userModel.insert(user, function(status){

		if(status == true){
			console.log(user.username);
			response.redirect('/login');
		}else{
			response.send('Error in adding user');
		}

	});
}



//var sql = 'insert into reg values (null,?,?,?,?)';
//db.getConnection();
/*db.getConnection.query(sql,[username, password, utype, mobile], function(err, result){
  if(result){
    console.log(result);
  }
});*/

	//response.render('home/create');



});

module.exports = router;
