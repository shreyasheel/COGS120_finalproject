
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var index = require('./routes/index');
//var project = require('./routes/project');

var index = require('./public/js/indexJS')
var searchresults = require('./searchresultsJS');
var messages = require('./messagesJS')
var myprofile = require('./myprofileJS')
var search = require('./searchJS')
var createaccount = require('./createaccountJS')

//mentor pages
var mentor_abigail = require('./public/js/mentor-abigailJS')
var mentor_elliott = require('./public/js/mentor-elliottJS')
var mentor_kiefer = require('./public/js/mentor-kieferJS')
var mentor_mateo = require('./public/js/mentor-mateoJS')
var mentor_heather = require('./public/js/mentor-heatherJS')

// Example route
//var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view)
app.get('/searchresults', searchresults.view);
app.get('messages', messages.view)
app.get('/myprofile', myprofile.view);
app.get('/search', search.view)
app.get('/createaccount', createaccount.view)


//routes for mentors
app.get('/searchresults/mentor_abigail', mentor_abigail.view)
app.get('/searchresults/mentor_elliott', mentor_elliott.view)
app.get('/searchresults/mentor_kiefer', mentor_kiefer.view)
app.get('/searchresults/mentor_mateo', mentor_mateo.view)
app.get('/searchresults/mentor_heather', mentor_heather.view)


//app.get('/project/:id', project.projectInfo);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});