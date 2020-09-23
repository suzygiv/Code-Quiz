
  var myQuestions = [
    {  
      question: "Inside which HTML element do we put the JavaScript?",
      option1: "<javascript>",
      option2: "<scripting>", 
      option3: "<script>",
      option4: "<js>",
      answer: "3"
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      option1: "The <head> sections",
      option2: "The <body> section",
      option3: "Both the <head> section and the <body>",
      option4: "The <footer>",
      answer: "3"
    },
    {
      question: "How do you create a function in JavaScript?",
      option1: "function myFunction()",
      option2: "function:myFunction()" ,
      option3: "function:myFunction()",
      option4: "myFunction()",
      answer: "1"
    },
    {
      question: "How do you call a function named 'myFunction'?",
      option1: "call myFunction()",
      option2: "call function myFunction()",
      option3: "myFunction()",
      option4: "function()",
      answer: "3"
    },
    {
      question: "How does a FOR loop start?",
      option1: "for i = 1 to 5", 
      option2:"for (i <=5; i++)", 
      option3: "for (i = 0; i <= 5; i++)", 
      option4: "for (i = 0; i <= 5)",
      answer: "3"
    }
  
  ];

var quizQuestions = 0;
var currentQuestion = 0;
var score = 0;

const quizTime = document.getElementById("quizTime");
const startButton = document.getElementById("start-button");
const highScoreButton = document.getElementById("highScoresButton")
const submitButton = document.getElementById('answerButton');
const timer = document.querySelector("#start-button");

var startPageContainer = document.getElementById("start-page");
var questionPageContainer = document.getElementById('question-page');
var scorePageContainer = document.getElementById("score-page");
var finalPageContainer = document.getElementById("final-page");
var questionEl = document.getElementById("question");
var nextButton = document.getElementById("nextButton");
var resultContainer = document.getElementById("result");

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");


var timerOn = false;
var secondsLeft = 75;
var timerInterval = 0;
var penalty = 10;


timer.addEventListener("click", function() {
  if (timerInterval === 0) {
    timerInterval = setInterval(function() {
      secondsLeft--;
      quizTime.textContent = "Time Remaining: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
        quizTime.textContent = "Time is Up!";
      }
    }, 1000);
  }
  startQuiz();
});

function startQuiz() {
startPageContainer = document.getElementById("start-page");
  if (startPageContainer.style.display === "none") {
    startPageContainer.style.display = "block";
  } else {
    startPageContainer.style.display = "none";
  }
  questionPageContainer.className -= "invisible";
  
  }

  const totalQuestions = quizQuestions.length;

  function getQuestion (questionIndex) {
    const q = quizQuestions[questionIndex]; // Give a question from one of the question index
    questionEl.textContent =(questionIndex + 1) +'. ' + q.question // Assign question element text content, questionIndex + 1 will give the question number
    opt1.textContent = q.opt1;
    opt2.textContent = q.opt2;
    opt3.textContent = q.opt3;
    opt4.textContent = q.opt4;
    if (currentQuestion === totalQuestions) 

    questionPageContainer = document.getElementById("question-page");
    if (questionPageContainer.style.display === "none") {
      questionPageContainer.style.display = "block";
    } else {
      questionPageContainer.style.display = "none";
    }
    

    
    

};

// When press correct button, next question pops us

//Load next question
function nextQuestion () {
    

}
