let canvas;
let world;
let keyboard = new Keyboard();                                                  

/**
 * Initializes the game, sets up the canvas,
 * and applies saved volume settings.
 */
function init() {
    canvas = document.getElementById('canvas');                                 
    let savedVolume = localStorage.getItem("volume");
    if (savedVolume !== null) {
        document.getElementById("volume").value = savedVolume;
        Soundhub.objSetVolume();
    }
}

/**
 * Checks the current device orientation (mobile/desktop)
 * and displays a message on mobile devices in portrait mode.
 */
function checkDeviceOrientation(){
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isMobileViewport = window.matchMedia("(max-width: 1024px)").matches;
    const isMobile = isMobileUserAgent || isMobileViewport;
    if (isMobile && window.innerHeight > window.innerWidth) { // Portrait on mobile
        document.getElementById("rotateOverlay").style.display = "flex";
    } else {
        document.getElementById("rotateOverlay").style.display = "none";
    }
}

// #region key-event-listener
/**
 * Handles keydown events and sets the corresponding keyboard flags.
 */
window.addEventListener('keydown', (e) =>{                                     
    if(e.keyCode == 39){                                                       
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

/**
 * Handles keyup events and resets the keyboard flags.
 */
window.addEventListener('keyup', (e) =>{                                        
    if(e.keyCode == 39){                                                       
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

/**
 * Displays the win screen overlay.
 */
function showWinScreen() {
    const winOverlay = document.getElementById('winOverlay');
    winOverlay.classList.remove('hide');
}

/**
 * Displays the lose screen overlay.
 */
function showLoseScreen(){
    const loseOverlay = document.getElementById('loseOverlay');
    loseOverlay.classList.remove('hide');
}

/**
 * Restarts the game:
 * stops all intervals, hides overlays, and reloads the level.
 */
function restartGame() {
    IntervalHub.stopAllIntervals();                                     
    document.getElementById('winOverlay').classList.add('hide');        
    document.getElementById('loseOverlay').classList.add('hide');
    initLevel();                                                     
    world = new World(canvas, keyboard);                            
}

/**
 * Starts the game:
 * hides start overlays and loads the player/level.
 */
function startGame() {
    canvas = document.getElementById('canvas');
    initLevel();
    document.getElementById('startOverlay').classList.add('hide');
    document.getElementById('start-btn').classList.add('hide');
    document.getElementById('impress').classList.add('hide');
    world = new World(canvas, keyboard);                                    
}

/**
 * Toggles the imprint (impressum) overlay.
 */
function toggleImpressum() {
    document.querySelector('.impressum-overlay')
    .classList.toggle('hide');
}

/**
 * Adds touch controls for mobile devices
 * (walk left/right, jump, throw bottle).
 */
window.onload = () => {
    document.getElementById("touchWalkLeftButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById("touchWalkRightButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById("touchJumpButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById("touchThrowBottleButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.D = true;
        dWasReleased = false;
    });

    document.getElementById("touchWalkLeftButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById("touchWalkRightButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById("touchJumpButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById("touchThrowBottleButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.D = false;
        dWasReleased = true;
    });
}

/**
 * Reacts to window load, resize, or orientation change
 * and checks the device orientation.
 */
window.addEventListener("load", checkDeviceOrientation);
window.addEventListener("resize", checkDeviceOrientation);
window.addEventListener("orientationchange", checkDeviceOrientation);

