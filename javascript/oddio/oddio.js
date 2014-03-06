// oddio

var currentFile = "";
var playAudio = function() {
  if (window.HTMLAudioElement) {
    var song = document.getElementById("song");
    var audioURL = song.dataset.src;
    var audio = document.getElementById("player");
    audio.play();
  }
}
var skipSong = function()
var songs = [
  "http://mhmd.us/IC8+",
  "http://mhmd.us/Kv2H+"
]

document.addEventListener("click", playAudio)