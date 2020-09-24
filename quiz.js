//arrray of the quiz questions, avaialble choices, and correct answers     
var questions = [{
  title: "Inside which HTML element do we put the JavaScript?",
  choices: ["javascript", "scripting", "script", "js"],
  answer: "script"
},
{
  title: "Where is the correct place to insert a JavaScript?",
  choices: ["The head section", "The body section", "Both the head section and the body section", "The footer"],
  answer: "Both the head section and the body section"
},
{
  title: "How do you create a function in JavaScript?",
  choices: ["function myFunction()", "function:myFunction()", "function:myFunction()", "myFunction()"],
  answer: "function myFunction()"
},
{
  title: "How do you call a function named 'myFunction'?",
  choices: ["call myFunction()", "call function myFunction()", "myFunction()", "function()"],
  answer: "myFunction()"
},
{
  title: "How does a FOR loop start?",
  choices: ["for i = 1 to 5", "for (i <=5; i++)", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5"],
  answer: "for (i = 0; i <= 5; i++)"
}
]

// Variables 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// Starts the timer
function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
  timeLeft--;
  document.getElementById("timeLeft").innerHTML = timeLeft;
 
  if (timeLeft <= 0) {
      clearInterval(timer);
      endGame(); 
  }
}, 1000);

next();
}

// Stops Timer
function endGame() {
clearInterval(timer);

var quizContent = `
<h2>Game over!</h2>
<h3>You got a ` + score +  ` /100!</h3>
<h3>That means you got ` + score / 20 +  ` questions correct!</h3>
<input type="text" id="name" placeholder="First name"> 
<button onclick="setScore()">Set score!</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}

// Local Storage for Scores
function setScore() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}


function getScore() {
var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 

<button onclick="clearScore()">Clear Score</button><button onclick="resetGame()">Retake Quiz</button>

`;

document.getElementById("quizBody").innerHTML = quizContent;
}

// Clears the Score in local storage when 'clear' button is clicked
function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");

resetGame();
}

// Quiz Reset
function resetGame() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeLeft = 0;
timer = null;

document.getElementById("timeLeft").innerHTML = timeLeft;

var quizContent = `
<h1>
  Coding Quiz Challenge!
</h1>
<h3>
  Retake Quiz   
</h3>
<button onclick="start()">Start Quiz</button>`;

document.getElementById("quizBody").innerHTML = quizContent;
}

// Deduct 10 seconds from the timer for incorrect answer
function incorrect() {
timeLeft -= 10; 
next();
}

// Adds 10 points to the score for correct answer
function correct() {
score += 10;
next();
}

// Question Loop
function next() {
currentQuestion++;

if (currentQuestion > questions.length - 1) {
  endGame();
  return;
}

var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
  var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
  buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
  if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
      buttonCode = buttonCode.replace("[ANS]", "correct()");
  } else {
      buttonCode = buttonCode.replace("[ANS]", "incorrect()");
  }
  quizContent += buttonCode
}


document.getElementById("quizBody").innerHTML = quizContent;
}







































