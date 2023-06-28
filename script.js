document.addEventListener("DOMContentLoaded", function() {
    var musicSection = document.getElementById("music");
    var audioElement = musicSection.querySelector("audio");
  
    audioElement.onplaying = function() {
      musicSection.style.display = "none";
    };
  
    audioElement.onended = function() {
      musicSection.style.display = "block";
    };
  });