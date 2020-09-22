var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<scripting>", "<js>"],
    answer: "<script>"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> sections", "The <body> section"],
    answer: "Both the <head> section and the <body> section are correct"
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: ["function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    choices: ["call myFunction()", "call function myFunction()"],
    answer: "myFunction()"
  },
  {
    question: "How does a FOR loop start?",
    choices: ["for i = 1 to 5", "for (i <=5; i++)", "for (i = 0; i <= 5)"],
    answer: "for (i = 0; i <= 5; i++)"
  }
];

// Declared Variables
let questionCounter = 0;
let score = 0;
let totalQuestions = [];
var questionIndex = 0;

var title = document.getElementById("title");
var description = document.getElementById("descripton");
var quizTime = document.querySelector("#quizTime");
var timer = document.querySelector("#start-button");
var quizContainer = document.getElementById("quiz-container");
var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("highScoresButton")
var timerOn = false;

var secondsLeft = 75;
var timerInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

startButton.addEventListener("click", function() {
  startButton.className += " invisible";
  highScoreButton.className += " invisible";
  quizContainer.className -= "invisible";
  timerOn = true;
  startTimer();
});

timer.addEventListener("click", function() {
  if (timerInterval === 0) {
    timerInterval = setInterval(function() {
      secondsLeft--;
      quizTime.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
        quizTime.textContent = "Time is Up!";
      }
    }, 1000);
  }
  render(quizContainer);
});



