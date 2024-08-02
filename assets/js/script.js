let namePlayer = document.getElementById("name-of-player");
const letsPlayBtn = document.getElementById("quiz-button");
const leaderboardName = document.getElementsByClassName("namePlayer");
const leaderBoardGame = document.getElementsByClassName("scorePlayer");
const leaderboardList = document.getElementById("ul-leaderboard");
const leaderboardScore = JSON.parse(localStorage.getItem("leaderboardScore")) || [];

//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp & https://www.youtube.com/watch?v=XH5OW46yO8I
// to create modals when clicking buttons
let modal1 = document.getElementById("how-to-play-container");
let howToPlayText = document.getElementById("how-to-play-text");
let btn1 = document.getElementById("how-to-play-btn");
let modal2 = document.getElementById("leaderboard-container");
let btn2 = document.getElementById("leaderboard-btn");
let returnBtn = document.getElementsByClassName("return-button");

// When the user clicks on the button, the according modal will "open"
btn1.onclick = function() {
  modal1.style.display = "flex";
  modal1.style.justifyContent = "center";
  modal1.style.alignItems = "center";
  howToPlayText.innerText = "1. You have to enter a name to start, can be whatever you like. Maybe your favourite Bioshock character.\n2. You have to decide in which category you want to be quizzed in.\n3. You have to answer 15 questions.\n4. You have 20 seconds to answer each question. After 20 seconds the correct answer will be shown and you can choose to go to the next question.\n5. When clicking outside the quiz field the quiz will pause. You can either resume or restart the game.\n6. After the game you can save your score to the local storage or play again.\n7. When clicking the logo you will go to the home screen\n8. On the home screen you will find a link to gain more knowledge, you will surely need it.\n9. Now click outside this field to enter your name and prove that you're not just a splicer.";
};
btn2.onclick = function() {
  modal2.style.display = "flex";
  modal2.style.justifyContent = "center";
  modal2.style.alignItems = "center";
};

// When the user clicks anywhere outside of the modal, it closes it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == returnBtn[0] || event.target == returnBtn[1]) {
    modal2.style.display = "none";
    modal1.style.display = "none";
  }
};

//open link in new tab when clicking knowledge button
function openLink() {
  window.open("https://bioshock.fandom.com/wiki/BioShock_Wiki");
}

// when entering the name the user will be directed to the quiz page either bei pressing enter or clicking the according button
namePlayer.addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    if (namePlayer.value === ""){
      alert("Enter a name to start");
    } else {
      event.preventDefault();
      localStorage.setItem("userName", namePlayer.value);
      window.location.replace("quiz.html");
    }
  }
});
letsPlayBtn.addEventListener("click", function(event){
  if (namePlayer.value === ""){
     alert("Enter a name to start");
  } else {
    event.preventDefault();
    localStorage.setItem("userName", namePlayer.value);
    window.location.replace("quiz.html");
  }
});

// how to implement leaderboard data to the localStorage and retrieve it was done by the help of this playlist: https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
// mainly by video 8 & 9
// add score and name to leaderboard after the game is finished
// score will only be added if the user decides so in the quiz.js
leaderboardList.innerHTML = leaderboardScore.map( leaderboardScore  => {
  return `<li class="high-score">${leaderboardScore.name} Score: ${leaderboardScore.score}</li>`
}).join("");