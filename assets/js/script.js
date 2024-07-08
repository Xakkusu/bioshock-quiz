//adaptation of https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var modal = document.getElementById("how-to-play-container");

// Get the button that opens the modal
var btn = document.getElementById("how-to-play-btn");


// When the user clicks on the button, open the modal
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