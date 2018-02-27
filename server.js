var express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//var routes = require('./routes/index.js');
const router = require('./router');
var port = process.env.PORT || 3000;

var app = express();
const mongoose = require('mongoose');

process.env.MONGOLAB_URI = 'mongodb://root:1234@ds249398.mlab.com:49398/redux-auth';

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("DB connection alive");
});

app.use(morgan('combined'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    console.log(__dirname)
    //res.render('./pages/index');
});

//routes(app);

app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});