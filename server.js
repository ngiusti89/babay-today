var express = require('express');
// var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Sequelize = require('sequelize');

//Q:what is this doing in server?
// var User = require('./models')['Users'];

var app = express();
var PORT = process.env.PORT || 5000;

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var db = require('./models');

//TODO: Remove/refactor - no handlebars
// app.use(methodOverride('_method'));
// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//TODO: To remove this in favor of MVC/routing
// var userRoutes = require('./controllers/user_controller.js');
// app.use('/', userRoutes);

// var port = process.env.PORT || 3306;


db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("'==> 🌎 App listening on PORT " + PORT);
    });
});