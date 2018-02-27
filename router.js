const Auth = require('./controllers/auth');



module.exports = function(app){

    app.get('/', function(req, res) {
        res.render('./pages/signup');
    }).get('/about', function(req, res) {
        res.render('pages/about');
    }).get('/home', function(req, res) {
        res.render('pages/home');
    }).post('/signup_action', function(req, res) {
        res.status(200).send({
           fdf: 234
       });
    })
}

