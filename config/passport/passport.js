var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });


    //used to serialize the user
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    })

    //local signup
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (request, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (results) {
                console.log("TCL: inside signUp - FineOne results", results)
                if (results) {
                    return done(null, false, { message: 'That email is already taken' });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        email: email,
                        password: userPassword,
                        name: request.body.firstname
                    };

                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var User = user;

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({ where: { email: email } }).then(function (results) {
                console.log("TCL: inside signin- FineOne results", results)
                if (!results) {
                    return done(null, false, { message: 'Email does not exist' });
                }
                if (!isValidPassword(results.password, password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                var userinfo = results.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("this error is in SINGIN:: Error:", err);
                return done(null, false, { message: 'Something went wrong with your Signin' });
            });
        }
    ));
}
