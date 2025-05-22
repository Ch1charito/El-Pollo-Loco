class Character extends MovableObject{          // auch wenn Character leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    height = 250;
    y = 80;
    speed = 10;
    imagesWalking = [                                                             
            'img/2_character_pepe/2_walk/W-21.png',                                   // wir fügen unserem bildspiecer (JSON imageCache) einmal den path und eine value mit dem path hinzu
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png',
    ];
    imagesJumping = [                                                                 // ein array für grafiken wenn unser char springt
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];
    world;
    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);                                          // super müssen wir nur einmal machen danch können wir mit this arbeiten sobald ein character erstellt wird wird diese function aufgerufen
        this.loadImages(this.imagesJumping);
        this.applyGravity();
        this.animate();                                                               // wir rufen die function anmiate auf die den character animieren soll
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters

        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){         // wir sagen das der cahracter nicht weiter gehen kann als der angegebene wert aus levelendx der bei 700 liegt
                this.moveRight();
            }

            if(this.world.keyboard.LEFT && this.x > 0){                                 // mit x>0 sagen wir das er nur soweit laufen kann wenn x nicht 0 ist also es noch bild gibt
                this.moveLeft();
            }

            
            if(this.world.keyboard.SPACE && !this.isAboveGround()){                        // wenn wir die taste nach oben drücken und der character ist nicht auf dem boden
                this.jump();                                                            // --> dann springe
            }

            this.world.camera_x = -this.x + 100;                                             // jedesmal wenn wir die x koodrinate von unserem character verschieben geben wir camera_x in der world den wert von der x position unserers chacarcter
        }, 1000 / 60);

        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            
            if(this.isAboveGround()){
                this.playAnimation(this.imagesJumping);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){                // wir sagen das wenn die taste RIGHT true ist dann wird die animation ausgeführt sonst nicht --> entweder oder allso auch bei LEFT auf true
                // walk animation
                this.playAnimation(this.imagesWalking);                                                     // current Image wird erhöht also sind wir beim erneuten ausführen nichtmehr beim index 0 sondern 1
                }
            }


            
        },50);                                                                      // function wird alle 1000ms aufgerufen
        
    }

    // #endregion
}