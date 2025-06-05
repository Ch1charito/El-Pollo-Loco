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
    isHurt = false;
    hurtDuration = 500;


    //#endregion


    constructor(){
        super().loadImage(this.imagesAlert[0]); 
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesDead);
        this.loadImages(this.imagesHurt);
        this.x = 2500;
        this.animate();
        this.energy = 100;
    }


    //#region methods
    
    animate() {
        this.animationIntervalId = IntervalHub.startInterval(() => {
            this.animateImages();
        }, 200);
    }

    animateImages = () => {
        if (this.energy <= 0) {
            this.playAnimation(this.imagesDead);
        } else if (this.isHurt) {
            this.playAnimation(this.imagesHurt);
        } else {
            this.playAnimation(this.imagesAlert);
        }
    }

    hitEnemy(damage) {
        super.hitEnemy(damage); // Energie wird reduziert

        if (this.energy <= 0) {
            this.die();
        } else {
            this.isHurt = true;
            setTimeout(() => {
                this.isHurt = false;
            }, this.hurtDuration);
        }
    }

    die() {
        clearInterval(this.animationIntervalId);
        this.markedForDeletion = true;
    }
    
    
    //#endregion


}