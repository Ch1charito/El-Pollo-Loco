class Endbossbar extends DrawableObject{
    imagesEndbossbar = ImagesHub.statusbar.endboss;

    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.imagesEndbossbar);
        this.x = 490;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.setPercentage(100);
        
    }

    setPercentage(percentage){                                                    // eine function die die percentage der health statusbar verändern soll --> setPercentage(50) leben status healthbar ist bei 50 prozent
        this.percentage = percentage;                                             // --> muss eine zahl zwischen 0 und 5 ergeben damit wir auf das array mit bildern per index zugreifen können
        let path = this.imagesEndbossbar[this.resolveImageIndex()];              // hier kommt der pfad 0 bis 5 raus 
        this.img = this.imageCache[path];                                       // wir laden aus dem cache dann mit dem richtigen index den pfad in img
    }

    resolveImageIndex() {
        if (this.percentage >= 80) {
            return 5;
        } else if (this.percentage >= 60) {
            return 4;
        } else if (this.percentage >= 40) {
            return 3;
        } else if (this.percentage >= 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;  // leerer Balken / tot
        }
    }

    showEndbossBar(){           // um ab einer position meine endbossbar sichtbar zu machen
        this.width = 200;
        this.height = 60;
    }
}