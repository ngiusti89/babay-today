// var express = require('express');
// var router = express.Router();
// var User = require('../models')['Users'];
// var passport = require('passport');

// router.get('/', function (request, response) {
//     response.render('index');
// });

// //Signup page
// router.get('/signup', function (request, response) {
//     response.render('signup');
// });

// router.post('/signup', function (request, response) {
//     console.log("TCL: request", request);
//     User.create({
//         name: request.body.name,
//         phone: request.body.phone,
//         email: request.body.email,
//         password: request.body.password
//     });
//     response.redirect('login');
// });

// router.get('/login', function(request, response){
//     response.render('login');
// });

// router.post('login', function(request, response){
//     console.log("TCL: request", request)
//     User.findAll({
//         where: {
//             email: request.body.email,
//             password: request.body.password
//         }
//     }).then(function(results){
//         if(results != ""){
//             response.redirect('/login');
//         } else {
//             response.redirect('/login');
//         }
//     })
// });

// module.exports = router;
