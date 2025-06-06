let canvas;
let world;
let keyboard = new Keyboard();                                                  // ein neues Keyboard von unserem Object

function init() {
    canvas = document.getElementById('canvas');                                 // wir verknüpfen unser canvas
    initLevel();
    world = new World(canvas, keyboard);                                        // wir erstellen ein neues objekt, eine new World und geben ihr Canvas als unsere variable mit, --> zudem übergeben wir auch unsere variable keyboard
    console.log('my Character is', world.character);
    
}

// #region key-event-listener
window.addEventListener('keydown', (e) =>{                                     // ein keyboard event wenn man den button runterdrückt
    if(e.keyCode == 39){                                                       // wenn wir die taste mit dem keyCode 39 drücken ist right im objekt keyboard von false zu right geändert worden
        keyboard.RIGHT = true;
    };
    if(e.keyCode == 37){
        keyboard.LEFT = true;
    };
    if(e.keyCode == 38){
        keyboard.UP = true;
    };
    if(e.keyCode == 40){
        keyboard.DOWN = true;
    };
    if(e.keyCode == 32){
        keyboard.SPACE = true;
    };
    if(e.keyCode == 68){
        keyboard.D = true;
    };
});

window.addEventListener('keyup', (e) =>{                                        // ein keyboard event wenn man den button loslässt
    if(e.keyCode == 39){                                                       // wenn wir die taste mit dem keyCode 39 los lassen wird wieder auf false geändert
        keyboard.RIGHT = false;
    };
    if(e.keyCode == 37){
        keyboard.LEFT = false;
    };
    if(e.keyCode == 38){
        keyboard.UP = false;
    };
    if(e.keyCode == 40){
        keyboard.DOWN = false;
    };
    if(e.keyCode == 32){
        keyboard.SPACE = false;
    };
    if(e.keyCode == 68){
        keyboard.D = false;
    };
    
});
// #endregion


// functionen um den loose oder win screen zu zeigen

function showWinScreen() {
    const winOverlay = document.getElementById('winOverlay');
    winOverlay.classList.remove('hide');
}

function showLoseScreen(){
    const loseOverlay = document.getElementById('loseOverlay');
    loseOverlay.classList.remove('hide');
}

// eine funciton um das game zu restarten --> ich lösche die aktuelle world und erstelle eine neue
function restartGame() {
    // Stoppe alle laufenden Intervalle
    IntervalHub.stopAllIntervals();

    // Overlay ausblenden
    document.getElementById('winOverlay').classList.add('hide');
    document.getElementById('loseOverlay').classList.add('hide');

    // Neues Level initialisieren
    initLevel();

    // Neue Welt erstellen mit frischem Level
    world = new World(canvas, keyboard);
}
