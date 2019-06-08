var express = require('express');
// var bodyParser = require('body-parser');

var session = require('express-session');
var passport = require('passport');
var Sequelize = require('sequelize');
var User = require('./models')['Users'];
var expressHandlebars = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// app.set('views', './views')
// app.engine('hbs', exphbs({ extname: '.hbs' }));
// app.set('view engine', '.hbs');

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', function (req, res) {
    res.send('Welcome to Passport with Sequelize');
});

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);


// Static directory
app.use(express.static("public"));

//load passport strategies
require('./config/passport/passport.js')(passport, models.Users);

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Nice! Database looks fine')
}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});
app.listen(PORT, function (err) {
    if (!err)
        console.log("Site is live"); else console.log(err)
});
