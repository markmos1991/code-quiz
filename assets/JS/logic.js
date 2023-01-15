var timerEl = document.getElementById("time")
var startBtn = document.getElementById("start")
const endScreen = document.querySelector(".end-screen")
let initial = document.querySelector(".initials")
let secondsLeft = 60;



// when the start button is clicked the timer countdown starts
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {

        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

// function to display questions
function displayQuestion()  {
   

}

// when the start button is clicked the first questions appear on screen


    startBtn.addEventListener("click", function()
    {
    setTime();
    displayQuestion();

});



// when the start button is clicked the first set of questions is shown




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
