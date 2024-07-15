const namePlayer = document.getElementById("name");

//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal & button that opens the modal
let modal1 = document.getElementById("how-to-play-container");
let btn1 = document.getElementById("how-to-play-btn");
let modal2 = document.getElementById("leaderboard-container");
let btn2 = document.getElementById("leaderboard-btn");
// When the user clicks on the button, open the modal
//kann ich hier nicht einfach so ähnlich wi unten machen mit if id=="" then?
btn1.onclick = function() {
  modal1.style.display = "flex";
  modal1.style.justifyContent = "center";
  modal1.style.alignItems = "center";
}
btn2.onclick = function() {
  modal2.style.display = "flex";
  modal2.style.justifyContent = "center";
  modal2.style.alignItems = "center";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//open link in new tab when clicking knowledge button
function openLink() {
  window.open("https://bioshock.fandom.com/wiki/BioShock_Wiki");
}

// when entering the name the user will be directed to the quiz page
namePlayer.addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    window.location.replace("quiz.html");
  }
})