// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.todo.findAll({}).then(function(dbd) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbd);
    });
  });

  app.get("/api/getbabies/:id", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    
    db.Baby.findAll({
      where: {
        account_id: req.params.id
      },
    }).then(function(dbd) {
      res.json(dbd);
    });
  });

  app.get("/api/getuser/:id", function(req, res) {
    console.log("Trying get with account id" + req.params.id)
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbd) {
      res.json(dbd);
    });
  });
}