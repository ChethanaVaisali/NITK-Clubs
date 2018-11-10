var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const api = require('./server/routes/api')

//var login = require('./routes/login');
//var feedback = require('./routes/feedback');

const port = 3000;

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'dist/clubs')));

//app.post('/login', login.login);
//app.post('/feedback', feedback.feedback);

app.use('/api', api);

app.get('*', (req, res)=> {
	res.sendFile(path.join(__dirname, 'dist/clubs/index.html'));
});

app.listen(port, ()=>{
	console.log('Server started at port:'+port);
});
