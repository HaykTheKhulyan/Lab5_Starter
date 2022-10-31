// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  let myImg = document.getElementsByTagName("img")[0];
  let myAudio = document.getElementsByTagName("audio")[0];
  let myAudioIcon = document.getElementsByTagName("img")[1];

  let myHornSelect = document.getElementById("horn-select");
  let myAudioSlider = document.getElementById("volume");
  let myPlayButton = document.getElementsByTagName("button")[0];

  const jsConfetti = new JSConfetti();

  myHornSelect.addEventListener('change', function() {
    if (myHornSelect.value == "air-horn") {
      myImg.src="assets/images/air-horn.svg";
      myAudio.src="assets/audio/air-horn.mp3";
    }
    else if (myHornSelect.value == "car-horn") {
      myImg.src="assets/images/car-horn.svg";
      myAudio.src="assets/audio/car-horn.mp3";
    }
    else {
      myImg.src="assets/images/party-horn.svg";
      myAudio.src="assets/audio/party-horn.mp3";
    }
  });

  myAudioSlider.addEventListener('input', function() {
    if (myAudioSlider.value == 0) {
      myAudioIcon.src="assets/icons/volume-level-0.svg";
    }
    else if (myAudioSlider.value < 33) {
      myAudioIcon.src="assets/icons/volume-level-1.svg";
    }
    else if (myAudioSlider.value < 67) {
      myAudioIcon.src="assets/icons/volume-level-2.svg";
    }
    else {
      myAudioIcon.src="assets/icons/volume-level-3.svg";
    }

    myAudio.volume = myAudioSlider.value / 100;

  });

  myPlayButton.addEventListener('click', function() {
    myAudio.play();

    if (myHornSelect.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });


}