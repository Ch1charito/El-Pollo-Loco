class Chicken extends MovableObject{                    // auch wenn Chicken leer ist hat es nun alle eigenschaften die movable object hat --> wir vererben durch extends alle eigenschaften

    // #region attributes
    y = 360;
    height = 70;
    width = 70;
    imagesWalking = ImagesHub.chicken.walking;
    imagesDead = ImagesHub.chicken.dead;                // das bild für die toten chicken
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 10,
        right : 10,
        bottom : 10,
        left : 10
    }

    // #endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);
        this.x = 800 + Math.random() * 500;     // mit math.random erechne ich einen rdnm wert ziwschen 0 und 1. Weil man 1 pixel aber nicht sieht mulitplieziere ich den wert mit 500 und kriege einen Wert on 0 bis 500, das ganze addiere ich ja auf die 200 rauf--> so starteter bei 200 und geht bis 700
        
        this.speed = 0.15 + Math.random() * 0.25;                                     // wir veränder speed welches bestimmt wie schnell sich die chicken bewegen
        this.animate();
        this.energy = 50;
    }

    // #region methods
    animate(){                                                                        // eine function zum animieren unserers characters
        IntervalHub.startInterval(() => {
            this.moveLeft();                                                          // das small chicken bewegt sich nach links
        },1000 / 60);
        
        IntervalHub.startInterval(() => {
            this.playAnimation(this.imagesWalking);                                   // die animation zum laufen wird abgerufen
        },200)                                                                          // function wird alle 1000ms aufgerufen                                                                       // function wird alle 1000ms aufgerufen
        
    }
    // #endregion

}