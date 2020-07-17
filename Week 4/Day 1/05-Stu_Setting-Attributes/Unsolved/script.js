
    /*document.body.querySelector('#main').children[0].children[0].children[1].children[0].src = "./images/image_1.jpg";
    document.body.querySelector('#main').children[0].children[0].children[1].children[0].alt = "man sitting at a mac computer";

    document.body.querySelector('#main').children[0].children[1].children[1].children[0].src = "./images/image_2.jpg";
    document.body.querySelector('#main').children[0].children[1].children[1].children[0].alt = "group of people mostly standing";*/


const imgElements = document.getElementsbyTagName('img');

imgElements[0].setAttribute('src', './images/image_1.jpg');
imgElements[1].setAttribute('src', './images/image_2.jpg');
imgElements[2].setAttribute('src', './images/image_3.jpg');

imgElements[0].setAttribute('alt', 'man at mac computer');
// more
// more

for(let i = 0; i < imgElements.length; i++) {
    imgElements[i].setAttribute
}