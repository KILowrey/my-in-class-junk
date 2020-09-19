const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "great-bay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  // something goes here but i'm not totally sure what
});



function postItem() {
  // use inquirer to create new items
}

async function bidItem() {
  // use inquirer to bid on items. lists all the items
}

function readItems() {
  // lists our all the items
}

function startup() {
  inquirer
    .prompt ({
      name: "prompt",
      type: 'choice',
      message: "What would you like to do? ",
      choice: ("POST an Item", "BID on an Item", "READ a list of the Items")
    })
    .then((prompt) {
      if (prompt.prompt === "POST an Item") {
        postItem();
      } else if (prompt.prompt === "BID on an Item") {
        bidItem();
      } else {
        readItems();
      }
    })
}