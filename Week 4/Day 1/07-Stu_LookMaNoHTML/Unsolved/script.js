// Create your HTML Page via DOM Methods here!

// this is the centered header 1
var header1 = document.createElement('h1'); // create a h1 element
header1.innerText = 'This is Header 1!'; // insert text
header1.style.textAlign = "center"; // centers the text
document.body.appendChild(header1); // append <h1> to <body>

// this is the centered header 2
var header2 = document.createElement('h2'); // create a h1 element
header2.innerText = 'This is Header 2! The Sequel!'; // insert text
header2.style.textAlign = "center"; // centers the text
document.body.appendChild(header2); // append <h1> to <body>

// this is the centered image
var image = document.createElement('img');
image.setAttribute('src', 'https://www.meme-arsenal.com/memes/9d3db1e15f3ced4a71ae0ea640601fb3.jpg');
image.setAttribute('style', 'display: block; margin: 0 auto;');
document.body.appendChild(image);

// this is a list of my favorite books
var books = ['Dracula', 'Percy Jackson', 'the Secret Garden'];
var listElement = document.createElement('ul');
for (let i = 0; i < books.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerText = books[i];
    listElement.appendChild(listItem);
}
document.body.appendChild(listElement);