//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal & button that opens the modal
var modal = document.getElementById("how-to-play-container");
var btn = document.getElementById("how-to-play-btn");
// When the user clicks on the button, open the modal
//kann ich hier nicht einfach so ähnlich wi unten machen mit if id=="" then?
btn.onclick = function() {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//open link in new tab when clicking knowledge button
function openLink() {

  window.open("https://bioshock.fandom.com/wiki/BioShock_Wiki");

}