const { response } = require("express");
// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "shield_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function(req, res) {
  // get a list of agents
  new Promise(function(resolve, reject) {
    connection.query(
      'SELECT * FROM cast',
      [],
      function(error, data) {
        if(error) reject(error);
        resolve(data)
      });
  })
  .then(function(castData) {
    let html = '<h1>Agents of SHIELD</h1>';
    html += castData.map(function(castMember) {
      return `<div>
        <p>${castMember.name}</p>
      </div>`
    }).join('\n');
    response.send(html);
  });
});

app.get("/coolness-chart", function(req, res) {

});

app.get("/role-chart/:role" function(req, res) {

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});