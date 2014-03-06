// oddio

var currentFile = "";
var playAudio = function() {
  if (window.HTMLAudioElement) {
    var audio = document.getElementById("player");
    audio.play();
  }
}
var skipSong = function(){
  var player = document.getElementById("player");
  player.src = songs[0];
  if (songs.length > 1 ) songs = songs.pop();
  console.log(songs);
  player.play();
};
var songs = [
  "http://mhmd.us/Kv2H+",
  "http://mhmd.us/IC8+"
]

var playButton = document.getElementById("play");
var skipButton = document.getElementById("skip");
playButton.addEventListener("click", playAudio);
skipButton.addEventListener("click", skipSong);