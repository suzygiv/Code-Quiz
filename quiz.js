
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
    questionPage.className -= "invisible";
    startPage.className += " invisible";
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
    render(questionPage);
  });
  
  function generateQuestions(){
    question.textContent=questions[questionNumber].title;
    console.log(questions[questionNumber].title);
    choices[0].textContent = questions[questionNumber].choices[0];
    choices[1].textContent = questions[questionNumber].choices[1];
    choices[2].textContent = questions[questionNumber].choices[2];
    choices[3].textContent = questions[questionNumber].choices[3];
 }
function hideFeedback(){
    var feedback= document.getElementById("feedback");
    feedback.style.display='none'
}
function handleClick(event){
    let answerindex = questionNumber;
    if(questionNumber<questions.length)
    {
        if(questions[answerindex].answer===event.target.textContent)
        {
            feedback.textContent="Your answer is correct!!"
            setTimeout(hideFeedback,1000);
            feedback.removeAttribute('style');
        }
        else{
            feedback.textContent="Your answer is incorrect!"
            setTimeout(hideFeedback,1000);
            timeLeft = timeLeft - 15;
            feedback.removeAttribute('style');
        }
    questionNumber++;
    generateQuestions();
    }
 }
function submitScore() {
    document.getElementById("questionPage").classList.add('d-none');
    document.getElementById("finalPage").classList.remove('d-none');
    score.textContent = "Your final score is " + timeLeft + "!!";
} 
function displayScore(){
     var newScore = {
        name: userInput.value,
        score: timeLeft,
    };
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    
    console.log(highScores);
}
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        displayScore();
        
        window.location.href = 'highScore.html'
    });
  
  
  