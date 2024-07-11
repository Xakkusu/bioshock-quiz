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