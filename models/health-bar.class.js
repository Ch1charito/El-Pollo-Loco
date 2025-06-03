class Healthbar extends DrawableObject{
    //#region attributes
    imagesHealth = ImagesHub.statusbar.health;

    percentage = 100;                                                   // startpunkt healthbar

    //#endregion

    constructor(){                                                      // der constructor wird bei jeder instanzierung automatisch aufgerufen
        super();
        this.loadImages(this.imagesHealth);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);                                        // damit die statur bar standardmäßig 100 prozent hat
    }

    setPercentage(percentage){                                                    // eine function die die percentage der health statusbar verändern soll --> setPercentage(50) leben status healthbar ist bei 50 prozent
        this.percentage = percentage;                                             // --> muss eine zahl zwischen 0 und 5 ergeben damit wir auf das array mit bildern per index zugreifen können
        let path = this.imagesHealth[this.resolveImageIndex()];              // hier kommt der pfad 0 bis 5 raus 
        this.img = this.imageCache[path];                                       // wir laden aus dem cache dann mit dem richtigen index den pfad in img
    }


    resolveImageIndex(){
        if(this.percentage == 100){                                          // wenn die percentage 100 ist bild 5, kleiner als 80 bild 4 usw...
            return 5;
        } else if(this.percentage > 80){
            return 4;
        } else if(this.percentage > 60){
            return 3;
        } else if(this.percentage > 40){
            return 2;
        } else if(this.percentage > 20){
            return 1;
        } else {
            return 0;
        }
    }
    

}