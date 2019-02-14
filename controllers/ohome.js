var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
    userModel.getAllpost(function(result){
      response.render('home/ownerhome',{userList: result});
    });
	}else{
		response.redirect('/login');
	}



});

module.exports = router;
