const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios
      .get(queryUrl)
      .then(function(repoData) {
        // console.log(Object.keys(repoData));
        const repoNames = repoData.data.map(repoObject => repoObject.name);
        const repoNamesJson = JSON.stringify(repoNames, null, 4);
        fs.writeFile('./repos.json', repoNamesJson, function() {
          console.log('File Written');
        });
      });
  });
