const fs = require("fs");
const inquirer = require("inquirer");

const htmlDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Document</title>
</head>
<body>
  <h1>Portfolio</h1>
  <h2>${user.name}</h2>
  <h4>${location.city}, ${location.state} ${location.zip}</h4>
  <P>${user.bio}</P>
  <ul>
    <li>LinkedIn: ${links.linkedin}</li>
    <li>GitHub: ${links.github}</li>
    <li>Website: ${links.website}</li>
  </ul>
</body>
</html>`;

let user = [];
let location = [];
let links = [];

console.log('Welcome')

inquirer
  .prompt({
    message: "Enter your Name",
    name: "user.name"
  })
  .prompt({
    message: "Enter a a short Biography",
    name: "user.bio"
  })
  .prompt({
    message: "Enter your City",
    name: "location.city"
  })
  .prompt({
    message: "Enter your State (abbr)",
    name: "location.state"
  })
  .prompt({
    message: "Enter your Zip Code",
    name: "location.zip"
  })
  .prompt({
    message: ""
  })

// String template literals: For generating a string version of the HTML document before it is written to the filesystem
// Promises: For handling asynchronous behavior
// It may be a good idea to start building out the HTML skeleton in a real HTML file. Once you're happy with the HTML file's appearance in the browser, you can copy/paste its contents into a string template literal and write a function to insert the user input into the appropriate places in the HTML string before writing it to the filesystem.