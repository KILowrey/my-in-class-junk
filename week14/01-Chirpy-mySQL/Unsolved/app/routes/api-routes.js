// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps -- GET : SELECT
  app.get('/api/all', function(req,res) {
    new Promise(function(res,reject) {
      connection.query(
      'SELECT * FROM chirps',
      [],
      function(error, data) {
        if (error) reject(error);
        resolve
      }
      )
    })
  })

  // Add a chirp -- POST : INSERT


};
