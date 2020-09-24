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

//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
  timeLeft--;
  document.getElementById("timeLeft").innerHTML = timeLeft;
  //proceed to end the game function when timer is below 0 at any time
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










































// var quizQuestions = 0;
// var currentQuestion = 0;
// var score = 0;

// const quizTime = document.getElementById("quizTime");
// const startButton = document.getElementById("start-button");
// const highScoreButton = document.getElementById("highScoresButton")
// const submitButton = document.getElementById('answerButton');
// const timer = document.querySelector("#start-button");

// var startPageContainer = document.getElementById("start-page");
// var quizPageContainer = document.getElementById('quiz-page');
// var questionEl = document.getElementById("question");
// var nextButton = document.getElementById("nextButton");
// var resultContainer = document.getElementById("result");

// const opt1 = document.getElementById("opt1");
// const opt2 = document.getElementById("opt2");
// const opt3 = document.getElementById("opt3");
// const opt4 = document.getElementById("opt4");


// var timerOn = false;
// var secondsLeft = 75;
// var timerInterval = 0;
// var penalty = 10;

// var myQuestions = [{  
//   question: "Inside which HTML element do we put the JavaScript?",
//   option1: "<javascript>",
//   option2: "<scripting>", 
//   option3: "<script>",
//   option4: "<js>",
//   answer: "3"
// },
// {
//   question: "Where is the correct place to insert a JavaScript?",
//   option1: "The <head> sections",
//   option2: "The <body> section",
//   option3: "Both the <head> section and the <body>",
//   option4: "The <footer>",
//   answer: "3"
// },
// {
//   question: "How do you create a function in JavaScript?",
//   option1: "function myFunction()",
//   option2: "function:myFunction()" ,
//   option3: "function:myFunction()",
//   option4: "myFunction()",
//   answer: "1"
// },
// {
//   question: "How do you call a function named 'myFunction'?",
//   option1: "call myFunction()",
//   option2: "call function myFunction()",
//   option3: "myFunction()",
//   option4: "function()",
//   answer: "3"
// },
// {
//   question: "How does a FOR loop start?",
//   option1: "for i = 1 to 5", 
//   option2:"for (i <=5; i++)", 
//   option3: "for (i = 0; i <= 5; i++)", 
//   option4: "for (i = 0; i <= 5)",
//   answer: "3"
// }]


// timer.addEventListener("click", function() {
//   if (timerInterval === 0) {
//     timerInterval = setInterval(function() {
//       secondsLeft--;
//       quizTime.textContent = "Time Remaining: " + secondsLeft;

//       if (secondsLeft <= 0) {
//         clearInterval(timerInterval);
//         endQuiz();
//         quizTime.textContent = "Time is Up!";
//       }
//     }, 1000);
//   }
//   startQuiz();
// });

// function startQuiz() {
// startPageContainer = document.getElementById("start-page");
//   if (startPageContainer.style.display === "none") {
//     startPageContainer.style.display = "block";
//   } else {
//     startPageContainer.style.display = "none";
//   }
//   quizPageContainer.className -= "invisible";
  
//   }

//   const totalQuestions = quizQuestions.length;

//   function loadQuestion (questionIndex) {
//     var q = questions[questionIndex]; // Give a question from one of the question index
//     questionEl.textContent = (questionIndex + 1) +'. ' + q.question // Assign question element text content, questionIndex + 1 will give the question number
//     opt1.textContent = q.option1;
//     opt2.textContent = q.option2;
//     opt3.textContent = q.option3;
//     opt4.textContent = q.option4;
  
//     questionPageContainer = document.getElementById("question-page");
//     if (questionPageContainer.style.display === "none") {
//       questionPageContainer.style.display = "block";
//     } else {
//       questionPageContainer.style.display = "none";
//     }
  
//     function loadNextQuestion() {
//       var selectedOption = document.querySelector('input[type=radio]:checked');
//       if (!selectedOption){
//           alert ('Please select your answer!');
//           return;
//       }
  
//       var chkAnswerEl = document.getElementById('chkAns')
//       var answer = selectedOption.value;
//       if(questions[currentQuestion].answer != answer){
//           chkAnswerEl.textContent = "Incorrect Answer";
//           startCount = startCount - 10;
//       }
//       if(questions[currentQuestion].answer == answer){
//           chkAnswerEl.textContent = "That's Correct!";
//       }
  
//       selectedOption.checked = false;
//       currentQuestion++;
//       if(currentQuestion == totalQuestions - 1){
//           answerButton.textContent= "Finish";
//       }
  
//       if((currentQuestion == totalQuestions) || 'quizTimer' === 0){
//           container.style.display = 'none';
//           resultContainer.style.display = '';
//           resultContainer.textContent='Your Score: ' + quizTimer.textContent;
//           return;
//       }
//       loadQuestion(currentQuestion);
//   }
//   loadQuestion(currentQuestion);
    
    

// };
