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
const addToLeaderboardBtn =document.getElementById("add-to-leaderboard-btn");
let endOfGameContainer = document.getElementById("end-of-game");
let finishSentence = document.getElementById("finish-sentence");
let modal = document.getElementById("container-game-area");
let btn = document.getElementsByClassName("game-to-choose");
let restartContainer = document.getElementById("restart-game");
let score = 0;
let endScore;
let questions;
// number of questions left
let numberOfQuestions = 15;
// number of questions asked, will serve as an index of the questions object
let timerCounter;
let questionsAsked = 0;
let barCounter;


//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp & https://www.youtube.com/watch?v=XH5OW46yO8I 
/**
 * make modal visible when clicking the according button
 */
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
        } else if (this.id === "choose-b-all"){
            questions = [...questionsBAll];
        }
        setUp();
        modal.style.display = "flex";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
    };
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
    };
  } else if (event.target === redoGameBtn) {
    window.location.replace("quiz.html");
  }
};


// used https://www.youtube.com/watch?v=PBcqGxrr9g8&t=14s to get to know the basic structure
// of how to implement content for questions and answers of a quiz in Javascript
// and load it to the website, then configured it

/**
 * setting up the game
 */
function setUp(){
    questionsAsked = 0; 
    score = 0; 
    containerScore.innerHTML= "";
    runGame();
}

/**
 * starting the game with its content (running it)
 */
function runGame () {
    
    // listener to fix bug of wrong question-left counter and resetting timer when pressing enter or spacebar
    document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
    } else if (event.key === " " || event.code == "Space" || event.code == 32){
        event.preventDefault();
    }
    });

    rebootGame();
    next.style.display = "none";
    // create variable for active question being actively asked
    let activeQuestion = questions[questionsAsked];
    // create variable which will add 1 to the question asked, when using it below for the inner HTML the question counter will start with a 1
    let nrQuestion =  questionsAsked + 1 ;


    // will change inner html to the question with the index of questionAsked to the inner HTML of the question element & how many question are left
    questionToAsk.innerHTML = nrQuestion + ". " + activeQuestion.question;
    numberOfQuestions -= 1;
    questionContainer.innerHTML = "Questions left: " + numberOfQuestions;
    runTimer(20);
    runCountdownBar(100);

    // used the following instructions for the Fisher-Yates Shuffle to be able to shuffle answers https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772
    const forAnswerShuffle = activeQuestion.answers;
    for (let i = forAnswerShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [forAnswerShuffle[i], forAnswerShuffle[j]] = [forAnswerShuffle[j], forAnswerShuffle[i]];
    }

    // create new buttons for answers
    activeQuestion.answers.forEach(answer => {
        // new button variable 
        const button = document.createElement("button");
        // add the answer value from question-object to each button
        button.innerHTML = answer.text;
        // add same classes as other classes for styling
        button.classList.add("btn");
        button.classList.add("in-game-btn");
        // add created answer button
        answerOption.appendChild(button);
        // checks if the questions-object's answer has a "correct" key-value pair and add it to dataset of button
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // add click effect when player choses a button
        button.addEventListener("click", checkAnswer);
    });

    // when next button is clicked next question will be asked
    // in runGame body since it went through the question wrong as its own function
    next.addEventListener("click", nextQuestion);

}

/**
 * reboot answers of game in case player wants to start over and will remove additional answer-buttons when running the game
 */
function rebootGame() {
    // as long as the answer-elements have a child they will be rebooted
    while(answerOption.firstChild){
        answerOption.removeChild(answerOption.firstChild);
    }
}

/**
 * check the answer based on answer the player chose/clicked
 */
function checkAnswer(userAnswer) {
    clearInterval(timerCounter);
    clearInterval(barCounter);
    // add variables for the answer the player chose and for the correct answer option from the option's/button's data
    const chosenAnswer = userAnswer.target;
    // check if chosen answer is correct
    if (chosenAnswer.dataset.correct === "true"){
        // add class to make  it easier to style
        chosenAnswer.classList.add("true-answer");
    } else {
        chosenAnswer.classList.add("false-answer");
    }

    //player can only choose one button, for each button it will be checked if the dataset is true
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

/**
 * increase value of score based on the answer chosen by the user and whether it's correct
 */
function incrementScore (userAnswer) {
    const chosenAnswer = userAnswer.target;
    if (chosenAnswer.dataset.correct === "true"){
        score++;
    }
    containerScore.innerHTML= "Score: " + score;
}

/**
 * go to the next question based on which question has already been asked and either running game with data from next question or ending the game
 */
function nextQuestion(questionAsked) {
    // checks if there are still questions left
    if (questionsAsked === 14) {
        modal.style.display = "none";
        endOfGameContainer.style.display = "flex";
        endOfGameContainer.style.justifyContent = "center";
        endOfGameContainer.style.alignItems = "center";
        finishSentence.innerHTML = `Congrats, ${localStorage.getItem("userName")} you finished the quiz!\n
            Your score: ${score}`;
        //set value pair in local storage as true when game is finished
        localStorage.setItem("finished", true);
        addToLeaderboardBtn.addEventListener("click", function() {
            endScore = score;
            localStorage.setItem("userScore", endScore);
            window.location.replace("index.html");
        });
    } else if  (questionsAsked < questions.length){
        questionsAsked ++;
        if (questionsAsked<questions.length){
            clearInterval(timerCounter);
            clearInterval(barCounter);
            runGame();
        }
    } else {
        // is double since it created bugs when testing the game
        modal.style.display = "none";
        endOfGameContainer.style.display = "flex";
        endOfGameContainer.style.justifyContent = "center";
        endOfGameContainer.style.alignItems = "center";
        finishSentence.innerHTML = `Congrats, ${localStorage.getItem("userName")} you finished the quiz!\n
            Your score: ${score}`;
        //set value pair in local storage as true when game is finished
        localStorage.setItem("finished", true);
        addToLeaderboardBtn.addEventListener("click", function() {
            endScore = score;
            localStorage.setItem("userScore", endScore);
            window.location.replace("index.html");
        });
    }
}

// used several info-pages for the timer functions: https://javascript.info/settimeout-setinterval, https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript & https://www.youtube.com/watch?v=JRevaOwNKTI
/**
 *  creating timer based on the time to answer (20)
 */
function runTimer (timeToAnswer) {
    timerCounter = setInterval(() => {
        seconds.innerHTML = timeToAnswer;
        --timeToAnswer;
        if (timeToAnswer < 0){
            clearInterval(timerCounter);
            timesUp();
        }
    }, 1000);
}

/**
 * stopping the timer after the time is up
 */
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

// based on https://www.w3schools.com/howto/howto_js_progressbar.asp
/**
 * creating countdown bar based on its with that will run down with time passing
 */
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
);
}


