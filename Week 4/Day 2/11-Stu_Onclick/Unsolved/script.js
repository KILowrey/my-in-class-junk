// CODE COPIED FROM THE SOLVED FOLDER. COMMENTS EXPLAINING CODE BY ME. THIS IS HOW I LEARN

// variable for the count
var count = 0; 
// this writes the increment and it's changes to the html
var incrementEl = document.querySelector('#increment');
// this writes the decrement and it's changes to the html
var decrementEl = document.querySelector('#decrement');
// this write the count and it's changes to the html
var countEl = document.querySelector('#count');

// this is the function for the countertext.it makes it so the counder text is equal to the count
function setCounterText() {
    countEl.textContent = count;
}

// this increases the count by 1.
incrementEl.addEventListener('click', function() {
    // ++ adds one
    count++;
    // setCounterText... sets the counter text
    setCounterText();
});

//.addEventListener('click', function() {bla bla bla}) makes it so that the code listens for a click and then does the function

// this decreaces the count by one...
decrementEl.addEventListener('click', function() {
    // unless the count is not more than 0, in which case it does nothing.
    if(count > 0) {
        count--;
        setCounterText();
    }
});