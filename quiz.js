var startButton = document.getElementById("startButton");
var highScoreButton = document.getElementById("highScoreButton");
var buttons = document.querySelector("#buttons");
var timer = document.querySelector("#timer");
var choices = document.querySelector("#choices");
var submitButton = document.querySelector("#submit");
var results = document.querySelector("#results");

var timeElapsed;


// Array of questions
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
    answer: "<script>"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> sections", "The <body> section", "Both the <head> section and the <body> section are correct"],
    answer: "Both the <head> section and the <body> section are correct"
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "How do you call a function named "myFunction"?",
    choices: ["call myFunction()", "call function myFunction()", "myFunction()"]
    answer: "myFunction()"
  },
  {
    question: "How does a FOR loop start?"
    choices: ["for i = 1 to 5", "for (i <=5; i++)", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"]
    answer: "for (i = 0; i <= 5; i++)"
  }

];

buttons.addEventListener("click", function(event) {
  var buttonID = event.target.dispatchEvent;

  if(buttonID === "startButton") {
    beginQuiz();
  }

});

var questionNumber = -1;

choices.addEventListener("click", function(event) {
  var choice = event.target.textContent;
  var answer = questions[questionNumber].answer;

  if(choice === answer) {
    correctAnswer();
  } else {
    wrongAnswer();
  }
  }
});


