class Character extends MovableObject{          // auch wenn Character leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    height = 280;
    y = 155;
    imagesWalking = [                                                             
            'img/2_character_pepe/2_walk/W-21.png',                                   // wir fügen unserem bildspiecer (JSON imageCache) einmal den path und eine value mit dem path hinzu
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png',
        ];
    currentImage = 0;
    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);                                          // super müssen wir nur einmal machen danch können wir mit this arbeiten sobald ein character erstellt wird wird diese function aufgerufen
        this.animate();                                                               // wir rufen die function anmiate auf die den character animieren soll
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters
        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            let i = this.currentImage % this.imagesWalking.length;                    // let i = 0 % 6;=> 0,Rest0; --> modulu ist der mathematische Rest; let i = 5 % 6;=> 0,Rest5;  let i = 6 % 6;=> 1,Rest0;
            // i = 1,2,3,4,5,0   => ist eine unendliche reihe
            let path = this.imagesWalking[i];                                         // wir holen den Pfad zum aktuellen Bild aus dem Array imagesWalking anhand des Index von i 
            this.img = this.imageCache[path];                                         // Wir setzen das aktuelle Bild (this.img) auf das zwischengespeicherte Bild aus dem Cache anhand des Bildpfads
            this.currentImage++;                                                      // current Image wird erhöht also sind wir beim erneuten ausführen nichtmehr beim index 0 sondern 1
        },100);                                                                      // function wird alle 1000ms aufgerufen
        
    }

    jump(){

    };
    // #endregion
}