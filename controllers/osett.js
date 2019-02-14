var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');


//var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);

      response.render('home/osettings');

	}else{
		response.redirect('/login');
	}
});

router.post('/', function(request, response){
var user={
   npassword : request.body.npassword,
   cpassword : request.body.cpassword,
   username : request.session.un

};

if(!user.npassword || !user.cpassword || user.npassword != user.cpassword ){
	response.redirect('/osettings');
}else{
	userModel.update(user, function(status){

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
