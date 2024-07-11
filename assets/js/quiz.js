//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal & button that opens the modal
let modal = document.getElementById("container-game-area");
let btn = document.getElementsByClassName("game-to-choose");



// When the user clicks on the button, open the modal
//kann ich hier nicht einfach so ähnlich wi unten machen mit if id=="" then?
for (let i = 0; i<btn.length; i++){
    btn[i].onclick = function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } 
}


// used https://www.youtube.com/watch?v=PBcqGxrr9g8&t=14s to get to know the basic structure
// of how to implement content for questions
// and load it to the website, then working on my own on it

// variables for the quiz
const questionToAsk = document.getElementById("question");
const answerOption = document.getElementById("answers");
const next = document.getElementById("next-btn");
//score will be 0 at the start of the game
let score = 0;
// number of questions left
let numberOfQuestions = 15;
// number of questions asked, will serve as an index of the questions object
let questionsAsked = 0;



// content for questions and their answers
const questions = [
    {
        question : "blablabla1?",
        answers : [
            { text : "a", correct : false},
            { text : "b", correct : false},
            { text : "c", correct : true},
            { text : "d", correct : false}
        ]
    },
    {
        question : "blablabla2?",
        answers : [
            { text : "a", correct : false},
            { text : "b", correct : true},
            { text : "c", correct : false},
            { text : "d", correct : false}
        ]
    },
    {
        question : "blablabla3?",
        answers : [
            { text : "a", correct : true},
            { text : "b", correct : false},
            { text : "c", correct : false},
            { text : "d", correct : false}
        ]
    }
];

// function to set up game
function setUp(){
    questionsAsked = 0; // can i not just delete this, if everything works, test this
    score = 0; //same as above --> can vllt ne extra reset function machen um das zu umgehen
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

    // will change inner html to the question with the index of questionAsked to the inner HTML of the question element
    questionToAsk.innerHTML = nrQuestion + ". " + activeQuestion.question;

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

}

// function to increase value of score when answering correct
function incrementScore () {

}

// function to decrease how many questions are left
function questionsLeft () {

}

// function to show timer of 20 seconds
function runTimer () {

}

//maybe to add in futue 1. restart/reset function, 

setUp();