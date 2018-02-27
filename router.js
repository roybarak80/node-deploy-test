const Auth = require('./controllers/auth');

module.exports = function(app){

    app.get('/', function(req, res) {
        res.render('./pages/index');
    }).get('/about', function(req, res) {
        res.render('pages/about');
    }).post('/signup', Auth.sighup);

  
}