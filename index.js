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

// Second Library
twoQ = new sound('./sounds/library2/alert.wav'); // alert
twoW = new sound('./sounds/library2/big.wav'); // big
twoE = new sound('./sounds/library2/claps.wav'); // claps
twoA = new sound('./sounds/library2/deep.wav'); // deep
twoS = new sound('./sounds/library2/punch.wav'); // punch
twoD = new sound('./sounds/library2/shortBass.wav'); // shortBass
twoZ = new sound('./sounds/library2/shortClap.wav'); // shortClap
twoX = new sound('./sounds/library2/stereoClick.wav'); // stereoClick
twoC = new sound('./sounds/library2/tick.wav'); // tick

libraryTwo = [
    {
        sound: twoQ,
        name: 'DUUPPA!',
        key: 'Q'
    },

    {
        sound: twoW,
        name: 'BUUUPH!',
        key: 'W'
    },

    {
        sound: twoE,
        name: 'CLAAAP!',
        key: 'E'
    },

    {
        sound: twoA,
        name: 'BOOAAP!',
        key: 'A'
    },

    {
        sound: twoS,
        name: 'JIIIIP!',
        key: 'S'
    },

    {
        sound: twoD,
        name: 'KNOOCK!',
        key: 'D'
    },

    {
        sound: twoZ,
        name: 'CHIILT!',
        key: 'Z'
    },

    {
        sound: twoX,
        name: 'DEDELE!',
        key: 'X'
    },

    {
        sound: twoC,
        name: 'TIIICK!',
        key: 'C'
    }
];

// Third Library
threeQ = new sound('./sounds/library3/bassHit.wav'); // bassHit
threeW = new sound('./sounds/library3/chit.wav'); // chit
threeE = new sound('./sounds/library3/highConga.wav'); // highConga
threeA = new sound('./sounds/library3/highTom.wav'); // highTom
threeS = new sound('./sounds/library3/lowConga.wav'); // lowConga
threeD = new sound('./sounds/library3/lowTom.wav'); // lowTom
threeZ = new sound('./sounds/library3/ping.wav'); // ping
threeX = new sound('./sounds/library3/snare.wav'); // snare
threeC = new sound('./sounds/library3/tinCow.wav'); // tinCow

libraryThree = [
    {
        sound: threeQ,
        name: 'BWAAAPP!',
        key: 'Q'
    },

    {
        sound: threeW,
        name: 'CHIIII!',
        key: 'W'
    },

    {
        sound: threeE,
        name: 'DOOONK!',
        key: 'E'
    },

    {
        sound: threeA,
        name: 'DAAAAP!',
        key: 'A'
    },

    {
        sound: threeS,
        name: 'BOOONK!',
        key: 'S'
    },

    {
        sound: threeD,
        name: 'PUOOPH!',
        key: 'D'
    },

    {
        sound: threeZ,
        name: 'PIIING!',
        key: 'Z'
    },

    {
        sound: threeX,
        name: 'PHEESH!',
        key: 'X'
    },

    {
        sound: threeC,
        name: 'DUUUNK!',
        key: 'C'
    }
];


// Pad Element Generator
function newPad(pad) {
    const {sound, name, key} = pad; // destructures the provided pad object
    this.newPad = document.createElement('div'); // create a div element
    this.newPad.classList.add('drum-pad'); // add drum-pad class to the div element
    this.newPad.setAttribute('id', key); // sets the id of the div element to the pad object key
    this.newPad.setAttribute('type', 'button'); // sets div type to button
    this.newPad.innerText = key; // render the key
    this.newPad.onclick = () => {
        playSound(sound, name); // plays the sound
        classClick(key); // adds drum-pad-clicked class and removes it after 500ms
    };
    this.newPad.onmouseover = () => classHover(key); // initiates classHover function when mouse moves over button
    this.newPad.onmouseleave = () => {
        this.newPad.classList.remove('drum-pad-hover'); // removes drum-pad-hover class when mouse leaves button
    };
    padContainer.appendChild(this.newPad); // add newPad to pad-container div
};

// Play Sound Function
const playSound = (sound, name) => {
    sound.play(); // plays the sound (part of the sound function)
    beatName.innerHTML = name; // displays sound name in beat-name paragraph
};

// Edit Class on Hover
const classHover = (key) => {
    const pad = document.getElementById(key); // get current pad id
    pad.classList.add('drum-pad-hover'); // add drum-pad-hover class when mouse hovers over button
};

// Edit Class on Click
const classClick = (key) => {
    const pad = document.getElementById(key); // get current pad id
    pad.classList.add('drum-pad-clicked'); // add drum-pad-clicked class when button is clicked
    setTimeout(() => {
        pad.classList.remove('drum-pad-clicked'); // removes drum-pad-clicked class after 500ms
    }, 500)
};

// Create Pad Function
const createPads = (library) => {
    while (padContainer.firstChild) {
        padContainer.removeChild(padContainer.lastChild);
    }
    library.map((pad) => {
        new newPad(pad);
    });
};

// Select Library
let selectedLib; // declare selectedLib variable

// Render Library on First Page Load
window.onload = () => {
    selectedLib = libraryOne; // sets selectedLib to libraryOne on page load
    createPads(libraryOne); // feeds libraryOne into the createPads function
};

// Render Libraries on Click
libOne.onclick = () => {
    selectedLib = libraryOne; // sets selectedLib to libraryOne when button is clicked
    createPads(libraryOne); // feeds libraryOne into the createPads function
};

libTwo.onclick = () => {
    selectedLib = libraryTwo; // sets selectedLib to libraryTwo when button is clicked
    createPads(libraryTwo); // feeds libraryTwo into the createPads function
};

libThree.onclick = () => {
    selectedLib = libraryThree; // sets selectedLib to libraryThree when button is clicked
    createPads(libraryThree); // feeds libraryThree into the createPads function
};
