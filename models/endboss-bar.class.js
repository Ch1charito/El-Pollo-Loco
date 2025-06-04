class Endbossbar extends DrawableObject{
    imagesEndbossbar = ImagesHub.statusbar.endboss;

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.imagesEndbossbar);
        this.x = 2520;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
        
    }

    setPercentage(percentage){                                                    // eine function die die percentage der health statusbar verändern soll --> setPercentage(50) leben status healthbar ist bei 50 prozent
        this.percentage = percentage;                                             // --> muss eine zahl zwischen 0 und 5 ergeben damit wir auf das array mit bildern per index zugreifen können
        let path = this.imagesEndbossbar[this.resolveImageIndex()];              // hier kommt der pfad 0 bis 5 raus 
        this.img = this.imageCache[path];                                       // wir laden aus dem cache dann mit dem richtigen index den pfad in img
    }

    resolveImageIndex(){
        if(this.percentage == 100){                                          // wenn die percentage 100 ist bild 5, kleiner als 80 bild 4 usw...
            return 5;
        } else if(this.percentage >= 50){
            return 3;
        } else {
            return 0;
        } 
    }
}