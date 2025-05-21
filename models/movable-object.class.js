class MovableObject{                            // eine Schablone mit der wir sagen welche Felder drin sein sollen

    // #region attributes
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};                            // unser Bilderspeicher
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;                     // eine variable mit der wir die richtung von unserem character bestimmen --> standardmäßig faalse weil wir nicht gespiegelt starten wollen
    // #endregion

    // #region methods


    //loadImage('img/test.png'); = der aufruf der methode mit der wir dann die src bestimmen und dem img den src wert zuweisen
    loadImage(path){
        this.img = new Image();                 // image ist ein objekt was wir in javascript haben this.img = document.getElementById('iamge') <img id="image" src>
        this.img.src = path;
    }

    loadImages(arr){                            // parameter ist der array an bildern die wir hinzugüfen wollen --> die function läuft solange wie viele bilder wir hinzufügen wollen
        arr.forEach((path) => {                 // wir gehen durch dieses array durch
            let img = new Image();              // wir legen eine variable an mit einem neuen Bild
            img.src = path;                     // wir laden das Bild nun in das Image Objekt rein
            this.imageCache[path] = img;       // wir updaten unseren image cache und fügen ihm die bilder hinzu 
        });
        
    }

    moveRight() {
        console.log('moving right');
        
    }

    moveLeft(){
        setInterval( () => {                                                            // mit setIntervall kann ich eine bestimmte function in einem bestimmten Zeitintervall wiederholen
        this.x -= this.speed;                                                                 // 0.15 in dem fall px werden von der x koordinate im canvas abgezogen
        },1000 / 60)                                                                    // 60 fps => frames pro sekunde --> die functino wird 60 mal pro sekunde aufgerufen
    }

    // #endregion
}