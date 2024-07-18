// variables for the quiz
const questionToAsk = document.getElementById("question");
const answerOption = document.getElementById("answers");
const next = document.getElementById("next-btn");
const questionContainer = document.getElementById("container-number-of-questions");
const containerScore = document.getElementById("container-score");
const seconds = document.getElementById("seconds");
const countdownBar = document.getElementById("countdown-bar");
const redoGameBtn = document.getElementById("redo-game-button");
const restartGameBtn = document.getElementById("restart-game-btn");
const goBackToGameBtn = document.getElementById("go-back-btn");
const namePlayer = localStorage.getItem("userName");
let endOfGameContainer = document.getElementById("end-of-game");
let finishSentence = document.getElementById("finish-sentence");
let modal = document.getElementById("container-game-area");
let btn = document.getElementsByClassName("game-to-choose");
let restartContainer = document.getElementById("restart-game");
let score = 0;
let questions;
// number of questions left
let numberOfQuestions = 15;
// number of questions asked, will serve as an index of the questions object
let timerCounter;
let questionsAsked = 0;
let timeToAnswer = 20;
let barCounter;
let countdownBarWidth = 100;


//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal & button that opens the modal
// When the user clicks on the button, open the modal
//kann ich hier nicht einfach so ähnlich wi unten machen mit if id=="" then?
for (let i = 0; i<btn.length; i++){
    btn[i].onclick = function() {
        clearInterval(timerCounter);
        clearInterval(barCounter);
        if (this.id === "choose-b1"){
            questions = [...questionsB1];
        } else if (this.id === "choose-b2"){
            questions = [...questionsB2];
        } else if (this.id === "choose-b3"){
            questions = [...questionsB3];
        };
        setUp();
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    clearInterval(timerCounter);
    clearInterval(barCounter);
    restartContainer.style.display = "flex";
    restartContainer.style.justifyContent = "center";
    restartContainer.style.alignItems = "center";
    restartGameBtn.innerHTML = "Start New Game";
    goBackToGameBtn.innerHTML = "Go Back To Game";
    restartContainer.onclick = function (event) {
        if (event.target === goBackToGameBtn) {
            restartContainer.style.display = "none";
            let timeToResume = seconds.innerHTML;
            let barToResume = countdownBar.style.width;
            runTimer(timeToResume);
            barToResume = barToResume.replace("%","");
            runCountdownBar(barToResume);
        } else if (event.target === restartGameBtn) {
            window.location.replace("quiz.html");
        }
    }
  } else if (event.target === redoGameBtn) {
    window.location.replace("quiz.html");
  }
}


// used https://www.youtube.com/watch?v=PBcqGxrr9g8&t=14s to get to know the basic structure
// of how to implement content for questions
// and load it to the website, then working on my own on it

// content for questions and their answers


// function to set up game
function setUp(){
    questionsAsked = 0; 
    score = 0; //same as above --> can vllt ne extra reset function machen um das zu umgehen
    containerScore.innerHTML= "";
    runGame();
}

// function to start the game
function runGame () {
    
    // 
    rebootGame();

    // create variable for active question being asked which will change witht the progress of the game
    let activeQuestion = questions[questionsAsked];
    // create variable which will add 1 to the question asked, when using it below for the inner HTML the question counter will start with a 1
    let nrQuestion =  questionsAsked + 1 ;


    // will change inner html to the question with the index of questionAsked to the inner HTML of the question element & how many question are left (maybe delete the firstr?)
    questionToAsk.innerHTML = nrQuestion + ". " + activeQuestion.question;
    numberOfQuestions--;
    questionContainer.innerHTML = "Questions left: " + numberOfQuestions;
    runTimer(20);
    runCountdownBar(100);

    // create new buttons for answers
    activeQuestion.answers.forEach(answer => {
        // kann ich hier nicht einfach gleich den Value in die bestehende buttons geben? unbedingt testen sobald das gelernte erst funktionen, wäre dann kürzer & vllt einfacher zu verstehen!!!!!!!!!!
        
        // create a new button variable 
        const button = document.createElement("button");
        // add the answer value from question-object to each button
        button.innerHTML = answer.text;
        // add same classes as other classes for styling
        // wenn ich es hinbekomme den Schritt zu umgehen, dann das alles löschen !!!!!
        button.classList.add("btn");
        button.classList.add("in-game-btn");
        // add created answer button
        answerOption.appendChild(button);
        // checks if the quesitons-object's answer has a "correct" key-value pair and add it to dataset of button
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // add click effect when player choses a button
        button.addEventListener("click", checkAnswer)
    });

    // when next button is clicked next question will be asked
    // in runGame body since it went through the question wrong on its own
    next.addEventListener("click", ()=>{
        // checks if there are still questions left, if there are
        if (questionsAsked < questions.length){
            questionsAsked++;
            if (questionsAsked<questions.length){
                clearInterval(timerCounter);
                clearInterval(barCounter);
                runGame();
            }
        } else {
            modal.style.display = "none";
            endOfGameContainer.style.display = "flex";
            endOfGameContainer.style.justifyContent = "center";
            endOfGameContainer.style.alignItems = "center";
            finishSentence.innerHTML = `Congrats, ${localStorage.getItem("userName")} you finished the quiz!
                Your score: ${score}`
            //alert(`Congrats, you finished the quiz!
                //Your score: ${score}`)
        }
    });

}

// function to reboot answers of game in case player wants to start over and will remove additional answer-buttons when running the game
function rebootGame() {
    // as long as the answer-elements have a child they will be rebooted
    while(answerOption.firstChild){
        answerOption.removeChild(answerOption.firstChild);
    }
}

// function to check the answer the player clicked
function checkAnswer(userAnswer) {
    clearInterval(timerCounter);
    clearInterval(barCounter);
    // add variables for the answer the player chose and for the correct answer option from the option's/button's data
    const chosenAnswer = userAnswer.target;
    //const correctAnswer = chosenAnswer.dataset.correct === "true";
    // check if chosen answer is correct, versuche es gleich in dem if statement zu machen !!!!
    if (chosenAnswer.dataset.correct === "true"){
        // add class to make  it easier to style
        chosenAnswer.classList.add("true-answer");
    } else {
        chosenAnswer.classList.add("false-answer");
    }

    //player can only chose one button, for each button it will be checked if the dataset is true
    // when player chose wrong the correct answer will be highlighted as well
    Array.from(answerOption.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("true-answer");
        }
        //after one button is clicked the other buttons will be disabled
        button.disabled = true;
    });
    // show next button only after answer has been submitted
    next.style.display = "block";
    incrementScore (userAnswer);
}

// function to increase value of score when answering correct
function incrementScore (userAnswer) {
    const chosenAnswer = userAnswer.target;
    if (chosenAnswer.dataset.correct === "true"){
        score++;
    }
    containerScore.innerHTML= "Score: " + score;
}

// function to show timer of 20 seconds, set function insdie function as it won't work otherwise
// still dont like how at the beginning it still shows the seconds before it kp
function runTimer (timeToAnswer) {
    timerCounter = setInterval(() => {
        seconds.innerHTML = timeToAnswer;
        --timeToAnswer;
        if (timeToAnswer < 0){
            clearInterval(timerCounter);
            timesUp();
        }}
    , 1000)
}

// function to stop timer after the time is uo
function timesUp(){
    seconds.innerHTML = "0";
    Array.from(answerOption.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("true-answer");
        }
        //after one button is clicked the other buttons will be disabled
        button.disabled = true;
    });
    // show next button only after answer has been submitted
    next.style.display = "block";
}

// function to decrease countdown bar

// hilfe hier https://www.w3schools.com/howto/howto_js_progressbar.asp

function runCountdownBar(countdownBarWidth){
    barCounter = setInterval(() => {
        if (countdownBarWidth > 0){
            countdownBarWidth--;
            countdownBar.style.width = countdownBarWidth + "%";
        } else {
            clearInterval(barCounter);
        }
    },
    // got to 215 through testing which will act accordingly to 20 seconds
    213
)
}

//maybe to add in futue 1. restart/reset function, 

