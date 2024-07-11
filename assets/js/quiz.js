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
const question = document.getElementById("question");
const answer = document.getElementById("answer");
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
    
    // create variable for active question being asked which will change witht the progress of the game
    let activeQuestion = questions[questionsAsked];
    // create variable which will add 1 to the question asked so the index will increase and next question will run after answering the active one
    let nrQuestion =  questionsAsked + 1 ;

    // will change inner html to the question with the index of questionAsked to the inner HTML of the question element
    question.innerHTML = nrQuestion + ". " + questionsAsked.question;

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