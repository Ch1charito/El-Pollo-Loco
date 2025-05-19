let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');                                 // wir verknüpfen unser canvas
    world = new World(canvas);                                                  // wir erstellen ein neues objekt, eine new World und geben ihr Canvas als unsere variable mit
    console.log('my Character is', world.character);
    
}