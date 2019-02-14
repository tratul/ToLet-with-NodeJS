var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM user";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	getAllpost: function(callback){
		var sql = "SELECT * FROM uploadpost";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO reg values(null, ?, ?,?,?)";
		db.execute(sql, [user.username, user.password, user.utype, user.mobile], function(success){
			callback(success);
		});
	},
	uploadpost: function(user, callback){
		var sql = "INSERT INTO uploadpost values(null, ?, ?,?,?,?,?,?,?,?,?,?,?)";
		db.execute(sql, [user.title, user.bedroom, user.bathroom, user.size,  user.rent, user.photos, user.address, user.description , user.name, user.phone, user.email, user.location], function(success){
		//console.log(postinfo.title);
			callback(success);
		});
	},
	validate: function(user, callback){
		var sql = "select * from reg where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){

			var x= "abc";
			if(result.length > 0){

				 x= result[0].usertype;
				//console.log(x);
				//if(x== "renter")
				callback(x);

			}else{
				callback(x);
			}
		});
	},
	/*ucheck: function(user, callback){
		var sql = "select * from reg where username=? and password=? and utype="renter"";
		db.getResult(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},*/
	update: function(user, callback){
		var sql = "UPDATE reg set  password=? where username=?";

		db.execute(sql, [user.npassword, user.username], function(status){
			callback(status);
		});
	},
	updatepost: function(user, callback){
	//	var sql = "SELECT * from uploadpost";
	//	db.execute(sql, [user.photos, user.id], function(status){
			//callback(status);

		var sql = "UPDATE uploadpost set photos=? where id=?";

		db.execute(sql, [user.photos, user.id], function(status){
			callback(status);
		});
		//callback(status)
		//});
	},
}
