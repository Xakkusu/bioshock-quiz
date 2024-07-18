let namePlayer = document.getElementById("name-of-player");
const letsPlayBtn = document.getElementById("quiz-button");
const form = document.getElementById("save-player-name");

//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp & https://www.youtube.com/watch?v=XH5OW46yO8I
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

// add eventlistener for saving name data into local storage
//window.addEventListener("load", () => {
//  const nameStorage = localStorage.getItem("NAME", nameOfPlayer);
//  return nameStorage;
//})

//open link in new tab when clicking knowledge button
function openLink() {
  window.open("https://bioshock.fandom.com/wiki/BioShock_Wiki");
}

// when entering the name the user will be directed to the quiz page
namePlayer.addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    if (namePlayer.value === ""){
      alert("Enter a name to start");
    } else {
      event.preventDefault();
      form.submit();

    }
  }
})

// when pressing submit go to quiz file
letsPlayBtn.addEventListener("click", function(event){
  if (namePlayer.value === ""){
     alert("Enter a name to start");
  } else {
    event.preventDefault();
    localStorage.setItem("userName", namePlayer.value);
    alert(`${localStorage.getItem("userName")} lez go`)
  }
})

// save storage locally
function saveName() {
  localStorage.setItem("userName", playerNameValue);
}