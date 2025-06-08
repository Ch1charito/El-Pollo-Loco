class ChickenSmall extends MovableObject{
    // #region attributes
    y = 385;
    height = 40;
    width = 40;
    imagesWalking = ImagesHub.smallChicken.walking;
    imagesDead = ImagesHub.smallChicken.dead;
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 10,
        right : 10,
        bottom : 10,
        left : 10
    }
    //#endregion

    constructor(){                              // wenn irgendwo jemand sagt new Character wird automatisch der constrcutor aufgerufen und alles in den geschweiften Klammern wird ausgeführt
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');                    // mit super greifen wir auf die function aus der übergeordneten class movable objects zu
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 800 + Math.random() * 500;     // mit math.random erechne ich einen rdnm wert ziwschen 0 und 1. Weil man 1 pixel aber nicht sieht mulitplieziere ich den wert mit 500 und kriege einen Wert on 0 bis 500, das ganze addiere ich ja auf die 200 rauf--> so starteter bei 200 und geht bis 700
        
        this.speed = 0.50 + Math.random() * 0.25;                                     // wir veränder speed welches bestimmt wie schnell sich die chicken bewegen
        this.animate();
        this.energy = 25;
    }
    
    
    
    
    // #region methods
    animate(){
        this.moveIntervalId = IntervalHub.startInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.animationIntervalId = IntervalHub.startInterval(() => {
            this.animateImages();
        }, 200);
    }

    animateImages = () => {
        if (this.energy <= 0) {
            this.playAnimation(this.imagesDead);
            if (!this.isDeadSoundPlayed) {
                Soundhub.playSound(Soundhub.chickenDead);
                this.isDeadSoundPlayed = true;
            }
        } else {
            this.playAnimation(this.imagesWalking);
        }
    }


    die() {
        clearInterval(this.moveIntervalId);
        clearInterval(this.animationIntervalId);
        this.speed = 0;
        this.markedForDeletion = true;
    }
    // #endregion

}