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


// First Library
oneQ = new sound('./sounds/library1/block.wav'); // block
oneW = new sound('./sounds/library1/bump.wav'); // bump
oneE = new sound('./sounds/library1/cabasa.wav'); // cabasa
oneA = new sound('./sounds/library1/clave.wav'); // clave
oneS = new sound('./sounds/library1/conga.wav'); // conga
oneD = new sound('./sounds/library1/cowbell.wav'); // cowbell
oneZ = new sound('./sounds/library1/highShaker.wav'); // highShaker
oneX = new sound('./sounds/library1/lowShaker.wav'); // lowShaker
oneC = new sound('./sounds/library1/rip.wav'); // rip

libraryOne = [
    {
        sound: oneQ,
        name: 'OCCKKK!',
        key: 'Q'
    },

    {
        sound: oneW,
        name: 'BUUUMN!',
        key: 'W'
    },

    {
        sound: oneE,
        name: 'SCHIII!',
        key: 'E'
    },

    {
        sound: oneA,
        name: 'EIIITT!',
        key: 'A'
    },

    {
        sound: oneS,
        name: 'BWUUOP!',
        key: 'S'
    },

    {
        sound: oneD,
        name: 'DIIIUP!',
        key: 'D'
    },

    {
        sound: oneZ,
        name: 'CHIIDT!',
        key: 'Z'
    },

    {
        sound: oneX,
        name: 'SCHIPP!',
        key: 'X'
    },

    {
        sound: oneC,
        name: 'ENYIII!',
        key: 'C'
    }
];
