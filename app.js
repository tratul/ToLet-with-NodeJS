

//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var multer = require('multer');
var path = require('path');
//var cookieParser 	= require('cookie-parser');
var home 			= require('./controllers/home');
var login 			= require('./controllers/login');
var reg 			= require('./controllers/reg');
var ohome 			= require('./controllers/ohome');
var ahome 			= require('./controllers/ahome');
var opost 			= require('./controllers/opost');
var postpic 			= require('./controllers/postpic');
var osett 			= require('./controllers/osett');
var asett 			= require('./controllers/asettings');
var logout 			= require('./controllers/logout');
var app 			= express();

app.use('/assets', express.static('assets'));
app.use('/storage', express.static('storage'));

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'hhdhdhdhd', saveUninitialized: true, resave: false}));
//app.use(cookieParser());

//set storage





//ROUTING
app.use('/', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/ohome', ohome);
app.use('/ahome', ahome);
app.use('/post', opost);
app.use('/postpic', postpic);
app.use('/osettings', osett);
app.use('/asettings', asett);

app.get('/home', function(request, response){
	response.render('home/index');
});

app.use('/reg', reg);




//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});
