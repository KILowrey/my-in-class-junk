var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var status = "working";

  // Write code to start the timer here
  // make a function that starts the timer by taking the minutes from the user in work and setting total seconds to that
  // also use it to reset/clear existicing intervasl
  // update the DOM every second. seperate function
  // alert user to take break when done

function workOrRest() {

}

function startTimer() {
  if(status === "working") {
    totalSeconds = (workMinutesInput.value * 60)
  } else {
    totalSeconds = (restMinutesInput.value * 60)
  }
  interval = setInterval();
  clearInterval(interval);
}

playButton.addEventListener("click", startTimer);
