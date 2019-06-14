// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/babypicker", function (req, res) {
    if (req.user) {
      res.redirect("/baby-select");
    }
    
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/main", function (req, res) {
    if (req.user) {
      res.redirect("/main");
    }
    
  
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/addbaby", function(request, response){

    if (req.user) {
      res.redirect("/add-baby");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //**************************************************** */
  // *******sing-in sign-up related routes**************
  //**************************************************** */

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/baby-select");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/baby-select");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/baby-select");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/baby-select", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/baby-select.html"));
  });

  /************singup/signin realted routes are done******* */

};
