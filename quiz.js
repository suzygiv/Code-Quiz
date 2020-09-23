var currentQuestion = 0;
var score = 0;

const quizTime = document.getElementById("quizTime");
const startButton = document.getElementById("start-button");
const highScoreButton = document.getElementById("highScoresButton")
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
        option1: "The <head> sections", "The <body> section", "Both the <head> section and the <body> section are correct",
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

// Everything above generates, but I can't get the questions to generate


// function startGame() {
    
//     getQuestion(currentQuestion)

//     // Hide instructions and button 
//     startPageContainer.style.display = "none";

//     // Show questions section
//     questionPageContainer.style.display = "block";
    
// }

//     // Timer begins when button is clicked
    

//     startButton.addEventListener("click", function(){

//         //set time to 75 seconds
//         var secondsLeft = 75;
//         timer.textContent = "Timer: " + secondsLeft;


//         var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timer.textContent = "Timer: " + secondsLeft;

//         if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//         }

//         }, 1000);
//     });

    
//   startButton.addEventListener("click", function() {
//     if (timerInterval === 0) {
//       timerInterval = setInterval(function() {
//       secondsLeft--;
//       timer.textContent = "Time Remaining: " + secondsLeft;

//       if (secondsLeft <= 0) {
//         clearInterval(timerInterval);
//         endQuiz();
//         timer.textContent = "Time is Up!";
//       }
//     }, 1000);
//   }
//   startQuiz();
// });

// // Create a function that will load the quetions and be in charge of all the actions that will need to take place when swapping in a new question
// //This will let me call that function later when I set up the “submit” button.

// // Load question
// function getQuestion (questionIndex) {
//     const q = quizQuestions[questionIndex]; // Give a question from one of the question index
//     questionEl.textContent =(questionIndex + 1) +'. ' + q.question // Assign question element text content, questionIndex + 1 will give the question number
//     opt1.textContent = q.op1;
//     opt2.textContent = q.opt2;
//     opt3.textContent = q.opt3;
//     opt4.textContent = q.opt4;
//     if (currentQuestion === totalQuestions) 

//     // Show questions 
//     questionPageContainer.style.display = "block";

    
    

// };

// // When press correct button, next question pops us

// //Load next question
// function nextQuestion () {
    

// }

    
//         // clear the last question
//         // update the question
//         // update the answers


























// const currentQuestion = 0;
// const score = 0;

// const questionEl = document.getElementById("question");
// const opt1 = document.getElementById("opt1");
// const opt2 = document.getElementById("opt2");
// const opt3 = document.getElementById("opt3");
// const opt4 = document.getElementById("opt4");

// const timer = document.querySelector("#timer");
// const startButton = document.getElementById("start-button");
// const highScoreButton = document.getElementById("highScoresButton")
// const questions = document.getElementById("questions");

// var startPageContainer = document.getElementById("start-page");
// var questionPageContainer = document.getElementById('question-page');
// var scorePageContainer = document.getElementById("score-page");



// var timerOn = false;
// var secondsLeft = 75;
// var timerInterval = 0;
// var penalty = 10;


// startButton.addEventListener("click", function() {
//   if (timerInterval === 0) {
//     timerInterval = setInterval(function() {
//       secondsLeft--;
//       timer.textContent = "Time Remaining: " + secondsLeft;

//       if (secondsLeft <= 0) {
//         clearInterval(timerInterval);
//         endQuiz();
//         timer.textContent = "Time is Up!";
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
//   questionPageContainer.className -= "invisible";
//   }

//   // everything above functions - I can't get the below to function


  
//   function getQuestion (questionIndex) {
//     var q = questions[questionIndex];
//     questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
//     opt1.textContent = q.option;
//     opt2.textContent = q.option;
//     opt3.textContent = q.option;
//     opt4.textContent = q.option;
//   };

//   var loadNextQuestion() {
//     var selectedOption = document.querySelector('input[type=radio]:checked');
//     if(!selectedOption){
//       alert('Please select your answer!');
//       return;
//     }
//     var answer = selectedOption.value;
//     if(questions[currentQuestion].answer == answer){
//       score +- 10;
//     }
//     selectedOption.checked = false;
//     currentQuestion++;
//     if(currentQuestion == totalQuestion - 1){
//       nextButton.textContent = 'Finish';
//     }
//     if(currentQuestion == totalQuestion){
//       questionPageContainer.style.display = 'none';
//       resultContainer.style.display = '';
//       resultContainer.textContent = 'Your score: ' + score;
//       return;
//     }
//     loadQuestion(currentQuestion);
//   }
//   loadQuestion(currentQuestion);



//   var myQuestions = [
//     {  
//       question: "Inside which HTML element do we put the JavaScript?",
//       option1: "<javascript>",
//       option2: "<scripting>", 
//       option3: "<script>",
//       option4: "<js>",
//       answer: "3"
//     },
//     {
//       question: "Where is the correct place to insert a JavaScript?",
//       option1: "The <head> sections", "The <body> section", "Both the <head> section and the <body> section are correct",
//       option2: "The <body> section",
//       option3: "Both the <head> section and the <body>",
//       option4: "The <footer>",
//       answer: "3"
//     },
//     {
//       question: "How do you create a function in JavaScript?",
//       option1: "function myFunction()",
//       option2: "function:myFunction()" ,
//       option3: "function:myFunction()",
//       option4: "myFunction()",
//       answer: "1"
//     },
//     {
//       question: "How do you call a function named 'myFunction'?",
//       option1: "call myFunction()",
//       option2: "call function myFunction()",
//       option3: "myFunction()",
//       option4: "function()",
//       answer: "3"
//     },
//     {
//       question: "How does a FOR loop start?",
//       option1: "for i = 1 to 5", 
//       option2:"for (i <=5; i++)", 
//       option3: "for (i = 0; i <= 5; i++)", 
//       option4: "for (i = 0; i <= 5)",
//       answer: "3"
//     }
  
//   ];
  
  