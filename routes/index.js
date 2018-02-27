const Auth = require('../controllers/auth');

module.exports = function(app){
    app.get('/', function(req, res) {
        console.log(__dirname)
        //res.render('./pages/index');
    });

 
   
}

module.exports = function(app){
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
}


module.exports = function(app){
    app.post('/signup', Auth.sighup);
}