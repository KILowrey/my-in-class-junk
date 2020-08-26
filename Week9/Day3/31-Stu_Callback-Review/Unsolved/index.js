const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];
});

// Instructor Code
// const fs = require("fs");
// // sync -- tell filesystem to read a file
// fs.readFile("animals.json", "utf8", 
// // async -- filesystem actually goes and reads the file
// // VVVVV this is a callback
// function(err, data) {
//   // sync -- do this stuff once the file is read
//   if (err) {
//     // generic handle the error stuff.
//     throw err;
//   }
//   // Parse the JSON string to an object
//   const animalJSON = JSON.parse(data);
//   // Create two new arrays to contain the cats and dogs objects
//   const dogs = animalJSON.filter(animal => animal.species === 'dog');
//   const cats = animalJSON.filter(animal => animal.species === 'cat');
// });