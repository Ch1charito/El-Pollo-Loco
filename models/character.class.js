class Character extends MovableObject{          // auch wenn Character leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    height = 250;
    y = 80;
    speed = 10;
    imagesWalking = ImagesHub.character.walking;
    imagesJumping = ImagesHub.character.jumping;
    imagesDead = ImagesHub.character.dead;
    imagesHurt = ImagesHub.character.hurt;
    imagesStanding = ImagesHub.character.standing;
    imagesIdle = ImagesHub.character.idle;
    world;
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision bei pepe zu benutzen
        top : 110,
        right : 25,
        bottom : 10,
        left : 20
    }
    idleTime = 0;                                   // Zeit ohne Bewegung in Millisekunden
    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);                                          // super müssen wir nur einmal machen danch können wir mit this arbeiten sobald ein character erstellt wird wird diese function aufgerufen
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesDead);                                             // wir laden die bilder für die aniation wenn er tot ist
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesStanding);
        this.loadImages(this.imagesIdle);
        this.applyGravity();
        this.animate();                                                               // wir rufen die function anmiate auf die den character animieren soll
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters

        IntervalHub.startInterval(() => {
            let isMoving = false;                                                       // der zustand ob man sich aktuell bewegt oder nicht

            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){         // wir sagen das der cahracter nicht weiter gehen kann als der angegebene wert aus levelendx der bei 700 liegt
                this.moveRight();
                this.otherDirection = false;                                            // wenn wir die rechte taste drücken is direction false damit wir das bild ungespiegelt haben
                isMoving = true;
            }

            if(this.world.keyboard.LEFT && this.x > 0){                                 // mit x>0 sagen wir das er nur soweit laufen kann wenn x nicht 0 ist also es noch bild gibt
                this.moveLeft();
                this.otherDirection = true;                                             // hier bestimmen wir das das Bild gespiegelt sein soll und ändern die otherdirection auf true  
                isMoving = true;
            }

            
            if(this.world.keyboard.SPACE && !this.isAboveGround()){                        // wenn wir die taste nach oben drücken und der character ist nicht auf dem boden
                this.jump();                                                            // --> dann springe
                isMoving = true;
            }

            this.world.camera_x = -this.x + 100;                                             // jedesmal wenn wir die x koodrinate von unserem character verschieben geben wir camera_x in der world den wert von der x position unserers chacarcter

            if (isMoving) {
            this.idleTime = 0;
            } else {
            this.idleTime += 1000 / 60; // entspricht ca. 16.67ms pro Durchlauf --> wenn 1000 mal pro sekunden entsprechend der wiederholung 
            }
        }, 1000 / 60);
        
        IntervalHub.startInterval(() => {
            if(this.isDead()){                                                          // wenn der character tot ist zeigen wir diese grafiken an und sonst andere
                this.playAnimation(this.imagesDead);
            } else if (this.isHurt()){
                this.playAnimation(this.imagesHurt);                                    // wenn der character sich verletzt werden diese bilder in der animtaion abgespielt
            }else if(this.isAboveGround()){
                this.playAnimation(this.imagesJumping);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){                // wir sagen das wenn die taste RIGHT true ist dann wird die animation ausgeführt sonst nicht --> entweder oder allso auch bei LEFT auf true
                // walk animation
                this.playAnimation(this.imagesWalking);                                                     // current Image wird erhöht also sind wir beim erneuten ausführen nichtmehr beim index 0 sondern 1
                } else if (this.idleTime >= 5000){                                                          // wenn idle time bei 5000 ist also nach 5 sekunden wird diese antimation ausgeführt
                    this.playAnimation(this.imagesStanding);
                } else {
                    this.playAnimation(this.imagesIdle);                                    // die standard idle animation die immer gegebn ist
                }
            }
        },50);                                                                              // function wird alle 1000ms aufgerufen
        
    }

    drawRealFrame(ctx){
        if (this instanceof Character){               
            ctx.beginPath();                                                     // ich zeichne einen kasten um meine objecte beim zeichnen um das ganze dann für die collision zu benutzen
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offSett.left,
                this.y + this.offSett.top,
                this.width - this.offSett.left - this.offSett.right,
                this.height - this.offSett.top - this.offSett.bottom
            );
            ctx.stroke();
        }
    }

    // #endregion
}