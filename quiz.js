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
var score = 0;
var questionIndex = 0;

var quizTime = document.querySelector("#quizTime");
var timer = document.querySelector("#start-button");
var quizQuestions = document.querySelector("#quiz-questions");
var startButton = document.getElementById("start-button");

var secondsLeft = 75;
var timerInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function() {
  if (timerInterval === 0) {
    timerInterval = setInterval(function() {
      secondsLeft--;
      quizTime.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
        quizTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

function render(questionIndex) {
  quizQuestions.innerHTML = "";
  ulCreate.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionsIndex].title;
    var userChoices = questions[questionIndex].choices;
    quizQuestions.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    quizQuestions.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (check));
  })
}

function check(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");

    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent = "Correct! The answer is " + questions[questionIndex].answer;

    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent = "Wrong! The correct answer is " + questions[questionIndex].answer;
    }
  }
}

questionIndex++;

if (questionIndex >= questions.length) {
  endQuiz();
  createDiv.textContent = "You've Completed the Quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
} else {
  render(questionsIndex);
}
quizQuestions.appendChild(createDiv);

}

function endQuiz() {
  quizQuestions.innerHTML = "";
  quizTime.innerHTML = "";


//Add event listener
startButton.addEventListener("click", startQuiz);