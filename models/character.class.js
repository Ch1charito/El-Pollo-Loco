class Character extends MovableObject{          // auch wenn Character leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    height = 280;
    y = 155;
    speed = 10;
    imagesWalking = [                                                             
            'img/2_character_pepe/2_walk/W-21.png',                                   // wir fügen unserem bildspiecer (JSON imageCache) einmal den path und eine value mit dem path hinzu
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png',
    ];
    world;
    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);                                          // super müssen wir nur einmal machen danch können wir mit this arbeiten sobald ein character erstellt wird wird diese function aufgerufen
        this.animate();                                                               // wir rufen die function anmiate auf die den character animieren soll
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters

        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){         // wir sagen das der cahracter nicht weiter gehen kann als der angegebene wert aus levelendx der bei 700 liegt
                this.x += this.speed;
                this.otherDirection = false;                                            // wenn wir die rechte taste drücken is direction false damit wir das bild ungespiegelt haben
            }

            if(this.world.keyboard.LEFT && this.x > 0){                                 // mit x>0 sagen wir das er nur soweit laufen kann wenn x nicht 0 ist also es noch bild gibt
                this.x -= this.speed;
                this.otherDirection = true;                                            // hier bestimmen wir das das Bild gespiegelt sein soll und ändern die otherdirection auf true
            }
            this.world.camera_x = -this.x + 100;                                             // jedesmal wenn wir die x koodrinate von unserem character verschieben geben wir camera_x in der world den wert von der x position unserers chacarcter
        }, 1000 / 60);

        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){                // wir sagen das wenn die taste RIGHT true ist dann wird die animation ausgeführt sonst nicht --> entweder oder allso auch bei LEFT auf true
                // walk animation
                let i = this.currentImage % this.imagesWalking.length;                    // let i = 0 % 6;=> 0,Rest0; --> modulu ist der mathematische Rest; let i = 5 % 6;=> 0,Rest5;  let i = 6 % 6;=> 1,Rest0;
                // i = 1,2,3,4,5,0   => ist eine unendliche reihe
                let path = this.imagesWalking[i];                                         // wir holen den Pfad zum aktuellen Bild aus dem Array imagesWalking anhand des Index von i 
                this.img = this.imageCache[path];                                         // Wir setzen das aktuelle Bild (this.img) auf das zwischengespeicherte Bild aus dem Cache anhand des Bildpfads
                this.currentImage++;                                                      // current Image wird erhöht also sind wir beim erneuten ausführen nichtmehr beim index 0 sondern 1
            }
        },50);                                                                      // function wird alle 1000ms aufgerufen
        
    }

    jump(){

    };
    // #endregion
}