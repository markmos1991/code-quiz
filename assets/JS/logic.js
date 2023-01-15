const timerEl = document.querySelector("#timer")
const startBtn = document.querySelector(".start")
const endScreen = document.querySelector(".end-screen")
const initial = document.querySelector(".initials")

// create a function for timerEl that counts down from 70
function countdown() {
  var timeLeft = 70;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      timerEl.textContent = '';
          clearInterval(timeInterval);
        timerEl.textContent = "Times up!";
    }
  }, 1000);
}

//  function for collecting running tally of score in local storage

//  function for collecting initials in local storage




// when the start button is clicked the timer starts and the first questions appears
startBtn.addEventListener("click", function () {
  countdown();
  startScreen.classList.remove("hidden");
  startScreen.classList.add("show");
  initial.classList.remove("hidden");
  initial.classList.add("show");
});

// 1 .On page load, hide the questions and end screen elements, and display the start screen element.
// 2. When the start button is clicked:
//  - Start the timer
//  - Select a random set of questions from the allQuestions array
//  - Hide the start screen element and display the questions element
//  - Display the first question and its choices
// 3. When an answer choice is clicked:
//  - Check if the answer is correct
//  - If the answer is correct, increase the score
//  - If the answer is incorrect, decrease the time remaining
//  - Display feedback on whether the answer was correct or incorrect
//  - Display the next question
// 4. When all questions have been answered or the timer reaches 0:
//  - Stop the timer
//  - Hide the questions element and display the end screen element
//  - Display the final score
//  - Allow the user to enter their initials and submit their score
// 5. On the highscores page, display a list of previous high scores and allow the user to clear the high scores.
// 6. Store the high scores in local storage so that they persist even after the browser is closed.