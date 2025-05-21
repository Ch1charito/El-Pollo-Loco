class Chicken extends MovableObject{                    // auch wenn Chicken leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    y = 360;
    height = 70;
    width = 70;
    imagesWalking = ['img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ]

    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);
        this.x = 200 + Math.random() * 500;     // mit math.random erechne ich einen rdnm wert ziwschen 0 und 1. Weil man 1 pixel aber nicht sieht mulitplieziere ich den wert mit 500 und kriege einen Wert on 0 bis 500, das ganze addiere ich ja auf die 200 rauf--> so starteter bei 200 und geht bis 700
        
        this.speed = 0.15 + Math.random() * 0.25;                                     // wir veränder speed welches bestimmt wie schnell sich die chicken bewegen
        this.animate();
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters
        this.moveLeft();

        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            this.playAnimation(this.imagesWalking);                                                     // current Image wird erhöht also sind wir beim erneuten ausführen nichtmehr beim index 0 sondern 1
        },200);                                                                      // function wird alle 1000ms aufgerufen
        
    }
    // #endregion

}