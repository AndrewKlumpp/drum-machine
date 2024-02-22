const libOne = document.getElementById('lib-1'); // library 1 button
const libTwo = document.getElementById('lib-2'); // library 2 button
const libThree = document.getElementById('lib-3'); // library 3 button
const beatName = document.getElementById('beat-name'); // display name paragraph
const padContainer = document.getElementById('pad-container'); // pad container div

// Audio element generator
function sound(src) {
    this.sound = document.createElement('audio'); // create HTML audio element
    this.sound.src = src; // set src attribute to passed in link
    this.sound.setAttribute('preload', 'auto'); // preload the sound to be ready
    this.sound.setAttribute('controls', 'none'); // hide the controls
    this.sound.classList.add('clip'); // freeCodeCamp naming convention
    this.sound.style.display = 'none'; // hide the audio element
    document.body.appendChild(this.sound); // render the audio element into the DOM
    this.play = function () {
        this.sound.play(); // play the sound
    };
    this.stop = function () {
        this.sound.pause(); // pauses the sound
    };
};
