var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

function prepareRead() {
  // Create the countdown timer.

  // ask user how long between words

  const intervalAsString = prompt('How many milliseconds would you like between wordr?', '250');
  const interval = parseInt(intervalAsString);

  console.log(interval);

  let count = 5;

  const intervalId = setInterval(function () {
    document.getElementById('countdown').innerText = 'Preparing to read... ' + count;

    count --;

    if(count < 0) {
      document.getElementById('countdown').innerText = '';
      clearInterval(intervalId);

      speedRead(interval);
    }
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  console.log('I am now in speedRead');

  // turn poem into a set of words (an array) // simplest is split and console log
  const poemAsArray = poem.split(' ');
  let currentWordIndex = 0;
  
  const intervalId = setInterval(function () {
    // print each word in time
    document.getElementById('reader').innerText = poemAsArray[currentWordIndex];
    // Stop when you're out of words

    currentWordIndex ++;

    if(currentWordIndex >= poemAsArray.length) {
      clearInterval(intervalId);
    }
  }, interval);
}
