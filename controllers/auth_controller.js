var exports = module.exports = {}

exports.signup = function(request, response){
    response.render('signup');
}

exports.signin = function(request, response){
    response.render('signin');
}

exports.dashboard = function(request, response){
    response.render('dashboard');
}

exports.logout = function(request, response){
    request.session.destroy(function(err){
        responsse.redirect('/');
    });
}
