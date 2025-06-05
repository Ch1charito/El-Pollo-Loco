class ThrowableObject extends MovableObject{
    offSett = {                                     // die varaible um ein offset also einen ineren ramen für die collision zu benutzen
        top : 10,
        right : 30,
        bottom : 10,
        left : 30
    }

    imagesBottleRotation = ImagesHub.bottle.rotation;
    imagesSplash = ImagesHub.bottle.splash;
    isBroken = false;




    constructor(x, y){
        super().loadImage('img/7_statusbars/3_icons/icon_salsa_bottle.png'); 
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.loadImages(this.imagesBottleRotation);
        this.loadImages(this.imagesSplash)
        this.throw();
        

    }


    /* throw(){
        this.speedY = 30;
        this.applyGravity();
        IntervalHub.startInterval(() => {
            this.playAnimation(this.imagesBottleRotation)
        },1000 / 60);
        IntervalHub.startInterval(() => {
            this.x += 10;
        }, 25);
    } */
    throw() {
        this.speedY = 30;
        this.applyGravity();

        this.animationIntervalId = IntervalHub.startInterval(() => {
            if (!this.isBroken) {
                this.playAnimation(this.imagesBottleRotation);
            }
        }, 1000 / 60);

        this.movementIntervalId = IntervalHub.startInterval(() => {
            if (!this.isBroken) {
                this.x += 10;
            }
        }, 25);
        }

    // eine methode um dafür zu sorgen das die flasche bricht
    break() {
        this.isBroken = true;  // markiere als kaputt
        this.playAnimation(this.imagesSplash);
    }
}