var express = require('express');
var mysql = require('mysql');
var multer = require('multer');
var path = require('path');
var userModel = require.main.require('./models/user-model');


//var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();


var storage = multer.diskStorage({
	destination: './storage/',
	filename: function(req, file, cb){
		cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
	}
});


var upload = multer({
	storage: storage
}).single('photos');

router.get('/', function(request, response){
	response.render('home/photo');
});

router.post('/', function(request, response){



upload(request, response, function(err){
  if(err){
    response.render('registration');
  }else{
    console.log(request.file);
    console.log(request.file.filename);
    userModel.getAllpost(function(status){
      var l = status.length;
      var s= status[l-1].id;
      var user={
         photos : request.file.filename,
          id: s
      };
      userModel.updatepost(user, function(status){

    		if(status == true){
    			response.redirect('/ohome');
    		}else{
    			response.send('Error in adding pic');
    		}

    	});
      //console.log(user.id);
      //console.log(user.photos);
    });

    /**/
    //{
    //response.send('ok done');
  }
})


/*if(!user.username || !user.password || !user.mobile ){
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
}*/



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
