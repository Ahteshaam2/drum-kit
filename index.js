// Get all drum elements
var drums = document.querySelectorAll(".drum");

// Function to play the corresponding sound for a given button
function playSound(btn) {
  switch (btn) {
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(btn);
  }
}

// Add click event listeners to each drum element
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function() {
    var btn = this.innerHTML;
    playSound(btn);
  });
}

// var audio= new  Audio("sounds/crash.mp3");
// audio.play();