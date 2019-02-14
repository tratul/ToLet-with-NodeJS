var express = require('express');
//var mysql = require('mysql');
//var path = require('path');
var userModel = require.main.require('./models/user-model');


//var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

/*var storage = multer.diskStorage({
	destination: './storage/',
	filename: function(req, file, cb){
		cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
	}
});

//init upload
var upload = multer({
	storage: storage
}).single('photos');*/

router.get('/', function(request, response){
	response.render('home/ownerpost');
});

router.post('/', function(request, response){
var postinfo={
   title : request.body.title,
   bedroom : request.body.bedroom,
   bathroom : request.body.bathroom,
   size : request.body.size,
   rent : request.body.rent,
   photos : " ",
   address : request.body.address,
   description : request.body.description,
   name : request.body.name,
   phone : request.body.phone,
   email : request.body.email,
   location : request.body.location
};

/*upload(request, response, function(err){
  if(err){
    response.render('registration');
  }else{
    console.log(request.file);
    console.log(postinfo.bathroom);
  }
})*/

if(!postinfo.title  || !postinfo.size || !postinfo.rent || !postinfo.address ||  !postinfo.description || !postinfo.name || !postinfo.phone || !postinfo.email || !postinfo.location ){
	response.redirect('/post');
}else{
	userModel.uploadpost(postinfo, function(status){

		if(status == true){
			response.redirect('/postpic');
		}else{
			response.send('Error in adding user');
		}

	});
  //response.redirect('/postpic');
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
