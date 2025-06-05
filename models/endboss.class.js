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


    //#endregion


    constructor(){
        super().loadImage(this.imagesAlert[0]); 
        this.loadImages(this.imagesAlert);
        this.x = 2500;
        this.animate();
        this.energy = 100;
    }


    //#region methods
    animate(){
        IntervalHub.startInterval(() => {
            this.playAnimation(this.imagesAlert);                                   // wir führen eine function zum animieren aus die wir aus movable objects bekommen
        },200)
    }
    
    
    //#endregion


}