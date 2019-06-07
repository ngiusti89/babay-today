var express = require('express');
// var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Sequelize = require('sequelize');
var User = require('./models')['Users'];

var app = express();
var PORT = process.env.PORT || 5000;
//connection to the MySQL database
// var connection = require('./config/connection.json');


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require('./models');

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



// require("./controllers/user_controller.js")(app);
var userRoutes = require('./controllers/user_controller.js');
app.use('/', userRoutes);



db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("'==> 🌎 App listening on PORT " + PORT);
    });
});