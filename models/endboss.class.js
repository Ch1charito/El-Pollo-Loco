class Endboss extends MovableObject {

    //#region attributes
    height = 400;                                               // größe des engegners 
    width = 250;
    y = 55;                                                    // position auf der y achse ab der gezeichnet werden soll
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 80,
        right : 10,
        bottom : 15,
        left : 10
    }

    imagesAlert = ImagesHub.endboss.alert;
    imagesDead = ImagesHub.endboss.dead;
    imagesHurt = ImagesHub.endboss.hurt;
    imagesWalking = ImagesHub.endboss.walking;
    isHurt = false;
    isMovingLeft = false;


    //#endregion


    constructor(){
        super().loadImage(this.imagesAlert[0]); 
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesWalking);
        this.x = 2500;
        this.animate();
        this.energy = 100;
        this.speed = 1;
    }


    //#region methods
    
    animate() {
        this.animationIntervalId = IntervalHub.startInterval(() => {
            this.animateImages();                                               
        }, 200);                                                        // 5 mal pro sekunden --> alle 200 ms
    }

    animateImages = () => {
        if (this.energy <= 0) {
            this.playAnimation(this.imagesDead);
        } else if (this.isHurt) {
            this.playAnimation(this.imagesHurt);
        } else if (this.isMovingLeft) {
            this.playAnimation(this.imagesWalking);
        } else {
            this.playAnimation(this.imagesAlert);
        }
    }

    hitEnemy(damage) {
        super.hitEnemy(damage);                                         // ich muss hier super.hit Enemy machen weil ich die grundlogik der methode aus movable object nehmen will aber auch noch erweitern will
        if (this.energy <= 0) {
            this.die();
        } else {
            this.isHurt = true;
            setTimeout(() => {
                this.isHurt = false;
            }, 500);
            if (!this.isMovingLeft && this.energy < 100) {
                this.isMovingLeft = true;
                this.startMovingLeft();
            }
        }
    }

    die() {
        this.markedForDeletion = true;
        this.speed = 0;
    }

    startMovingLeft() {
        this.moveIntervalId = IntervalHub.startInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
    
    
    //#endregion


}