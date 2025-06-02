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

    imagesWalking = ImagesHub.endboss.walking;


    //#endregion


    constructor(){
        super().loadImage(this.imagesWalking[0]); 
        this.loadImages(this.imagesWalking);
        this.x = 2500;
        this.animate();
    }


    //#region methods
    animate(){
        setInterval(() => {                                                           // wir wollen die function wiederholen mit einem abstand von 1000 ms
            this.playAnimation(this.imagesWalking);                                   // wir führen eine function zum animieren aus die wir aus movable objects bekommen
        },200); 
    }
    
    
    //#endregion


}