  const quizTime = document.getElementById("quizTime");
  const startButton = document.getElementById("start-button");
  const highScoreButton = document.getElementById("highScoresButton")
  const questions = document.getElementById("questions");
  const timer = document.querySelector("#start-button");

  var startPageContainer = document.getElementById("start-page");
  var questionPageContainer = document.getElementById('question-page');
  var scorePageContainer = document.getElementById("score-page");
 

  const choiceOne = document.getElementById("choice-1");
  const choiceTwo = document.getElementById("choice-2");
  const choiceThree = document.getElementById("choice-3");
  const choiceFour = document.getElementById("choice-4");

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
  

  
  